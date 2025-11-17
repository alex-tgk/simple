import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Switch } from './Switch';

describe('Switch', () => {
  it('renders switch element', () => {
    render(<Switch label="Test switch" />);
    expect(screen.getByText('Test switch')).toBeInTheDocument();
  });

  it('handles toggle state', async () => {
    const user = userEvent.setup();
    render(<Switch label="Toggle" />);
    const switchElement = screen.getByRole('checkbox');

    expect(switchElement).not.toBeChecked();
    await user.click(switchElement);
    expect(switchElement).toBeChecked();
  });

  it('handles controlled state', async () => {
    const handleChange = jest.fn();
    const { rerender } = render(
      <Switch label="Controlled" checked={false} onChange={handleChange} />
    );

    const switchElement = screen.getByRole('checkbox');
    expect(switchElement).not.toBeChecked();

    await userEvent.click(switchElement);
    expect(handleChange).toHaveBeenCalled();

    rerender(<Switch label="Controlled" checked={true} onChange={handleChange} />);
    expect(switchElement).toBeChecked();
  });

  it('handles disabled state', () => {
    render(<Switch disabled label="Disabled" />);
    const switchElement = screen.getByRole('checkbox');
    expect(switchElement).toBeDisabled();
  });
});
