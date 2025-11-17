import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Input } from './Input';

describe('Input', () => {
  it('renders input element', () => {
    render(<Input placeholder="Test input" />);
    expect(screen.getByPlaceholderText('Test input')).toBeInTheDocument();
  });

  it('applies default variant classes', () => {
    render(<Input data-testid="input" />);
    const input = screen.getByTestId('input');
    expect(input).toHaveClass('border-gray-300');
  });

  it('applies error state', () => {
    render(<Input error data-testid="input" />);
    const input = screen.getByTestId('input');
    expect(input).toHaveClass('border-red-500');
  });

  it('handles disabled state', () => {
    render(<Input disabled data-testid="input" />);
    const input = screen.getByTestId('input');
    expect(input).toBeDisabled();
    expect(input).toHaveClass('opacity-50');
  });

  it('applies full width when specified', () => {
    render(<Input fullWidth data-testid="input" />);
    const input = screen.getByTestId('input');
    expect(input).toHaveClass('w-full');
  });
});
