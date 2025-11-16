import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Divider } from './Divider';

describe('Divider', () => {
  it('renders divider element', () => {
    render(<Divider />);
    expect(screen.getByRole('separator')).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<Divider label="OR" />);
    expect(screen.getByText('OR')).toBeInTheDocument();
  });

  it('applies solid variant', () => {
    render(<Divider variant="solid" data-testid="divider" />);
    const divider = screen.getByTestId('divider');
    expect(divider).toHaveClass('border-solid');
  });

  it('applies dashed variant', () => {
    render(<Divider variant="dashed" data-testid="divider" />);
    const divider = screen.getByTestId('divider');
    expect(divider).toHaveClass('border-dashed');
  });

  it('applies vertical orientation', () => {
    render(<Divider orientation="vertical" data-testid="divider" />);
    const divider = screen.getByTestId('divider');
    expect(divider).toHaveAttribute('aria-orientation', 'vertical');
  });
});
