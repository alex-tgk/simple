import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Progress } from './Progress';

describe('Progress', () => {
  it('renders progress element', () => {
    render(<Progress value={50} />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('sets correct aria attributes', () => {
    render(<Progress value={75} />);
    const progress = screen.getByRole('progressbar');
    expect(progress).toHaveAttribute('aria-valuenow', '75');
    expect(progress).toHaveAttribute('aria-valuemin', '0');
    expect(progress).toHaveAttribute('aria-valuemax', '100');
  });

  it('clamps value between 0 and 100', () => {
    const { rerender } = render(<Progress value={150} />);
    let progress = screen.getByRole('progressbar');
    expect(progress).toHaveAttribute('aria-valuenow', '100');

    rerender(<Progress value={-50} />);
    progress = screen.getByRole('progressbar');
    expect(progress).toHaveAttribute('aria-valuenow', '0');
  });

  it('shows label when requested', () => {
    render(<Progress value={60} showLabel />);
    expect(screen.getByText('60%')).toBeInTheDocument();
  });

  it('applies color scheme', () => {
    render(<Progress value={50} colorScheme="success" />);
    const progress = screen.getByRole('progressbar');
    expect(progress).toHaveClass('bg-green-600');
  });
});
