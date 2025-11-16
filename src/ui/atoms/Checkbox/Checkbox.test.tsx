import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('renders checkbox element', () => {
    render(<Checkbox />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<Checkbox label="Accept terms" />);
    expect(screen.getByText('Accept terms')).toBeInTheDocument();
  });

  it('handles checked state', async () => {
    const user = userEvent.setup();
    render(<Checkbox label="Test" />);
    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).not.toBeChecked();
    await user.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it('handles disabled state', () => {
    render(<Checkbox disabled label="Disabled" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();
  });

  it('applies error state', () => {
    render(<Checkbox error data-testid="checkbox" />);
    const checkbox = screen.getByTestId('checkbox');
    expect(checkbox).toHaveClass('border-red-500');
  });
});
