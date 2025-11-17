import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Alert } from './Alert';

describe('Alert', () => {
  it('renders alert element', () => {
    render(<Alert>Alert message</Alert>);
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('renders with title', () => {
    render(<Alert title="Alert Title">Message</Alert>);
    expect(screen.getByText('Alert Title')).toBeInTheDocument();
  });

  it('applies status classes', () => {
    render(<Alert status="success" data-testid="alert">Success</Alert>);
    const alert = screen.getByTestId('alert');
    expect(alert).toHaveClass('bg-green-50');
  });

  it('renders close button when closable', () => {
    render(<Alert closable>Message</Alert>);
    expect(screen.getByLabelText('Close alert')).toBeInTheDocument();
  });

  it('calls onClose when close button clicked', async () => {
    const handleClose = jest.fn();
    const user = userEvent.setup();
    render(<Alert closable onClose={handleClose}>Message</Alert>);

    await user.click(screen.getByLabelText('Close alert'));
    expect(handleClose).toHaveBeenCalled();
  });
});
