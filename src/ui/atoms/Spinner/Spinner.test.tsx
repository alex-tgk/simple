import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Spinner } from './Spinner';

describe('Spinner', () => {
  it('renders spinner element', () => {
    render(<Spinner />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('has accessible loading text', () => {
    render(<Spinner />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('applies size classes', () => {
    render(<Spinner spinnerSize="large" data-testid="spinner" />);
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toHaveClass('w-12');
  });

  it('applies color scheme', () => {
    render(<Spinner colorScheme="success" data-testid="spinner" />);
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toHaveClass('border-green-600');
  });

  it('applies thickness', () => {
    render(<Spinner thickness="thick" data-testid="spinner" />);
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toHaveClass('border-8');
  });
});
