import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Textarea } from './Textarea';

describe('Textarea', () => {
  it('renders textarea element', () => {
    render(<Textarea placeholder="Test textarea" />);
    expect(screen.getByPlaceholderText('Test textarea')).toBeInTheDocument();
  });

  it('applies default variant classes', () => {
    render(<Textarea data-testid="textarea" />);
    const textarea = screen.getByTestId('textarea');
    expect(textarea).toHaveClass('border-gray-300');
  });

  it('applies error state', () => {
    render(<Textarea error data-testid="textarea" />);
    const textarea = screen.getByTestId('textarea');
    expect(textarea).toHaveClass('border-red-500');
  });

  it('handles disabled state', () => {
    render(<Textarea disabled data-testid="textarea" />);
    const textarea = screen.getByTestId('textarea');
    expect(textarea).toBeDisabled();
  });

  it('applies resize classes', () => {
    render(<Textarea resize="none" data-testid="textarea" />);
    const textarea = screen.getByTestId('textarea');
    expect(textarea).toHaveClass('resize-none');
  });
});
