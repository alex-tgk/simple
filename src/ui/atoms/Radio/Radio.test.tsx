import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Radio } from './Radio';

describe('Radio', () => {
  it('renders radio element', () => {
    render(<Radio />);
    const radio = screen.getByRole('radio');
    expect(radio).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<Radio label="Option A" />);
    expect(screen.getByText('Option A')).toBeInTheDocument();
  });

  it('handles checked state', async () => {
    const user = userEvent.setup();
    render(<Radio label="Test" />);
    const radio = screen.getByRole('radio');

    expect(radio).not.toBeChecked();
    await user.click(radio);
    expect(radio).toBeChecked();
  });

  it('handles disabled state', () => {
    render(<Radio disabled label="Disabled" />);
    const radio = screen.getByRole('radio');
    expect(radio).toBeDisabled();
  });

  it('applies error state', () => {
    render(<Radio error data-testid="radio" />);
    const radio = screen.getByTestId('radio');
    expect(radio).toHaveClass('border-red-500');
  });
});
