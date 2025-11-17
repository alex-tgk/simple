import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Toast } from './Toast';

describe('Toast', () => {
  it('renders toast element', () => {
    render(<Toast title="Test Toast" />);
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('renders title', () => {
    render(<Toast title="Toast Title" />);
    expect(screen.getByText('Toast Title')).toBeInTheDocument();
  });

  it('renders description', () => {
    render(<Toast title="Title" description="Description text" />);
    expect(screen.getByText('Description text')).toBeInTheDocument();
  });

  it('applies status classes', () => {
    render(<Toast status="success" title="Success" data-testid="toast" />);
    const toast = screen.getByTestId('toast');
    expect(toast).toHaveClass('bg-green-50');
  });

  it('renders close button when closable', () => {
    render(<Toast closable title="Test" />);
    expect(screen.getByLabelText('Close toast')).toBeInTheDocument();
  });

  it('calls onClose when close button clicked', async () => {
    const handleClose = jest.fn();
    const user = userEvent.setup();
    render(<Toast closable onClose={handleClose} title="Test" />);

    await user.click(screen.getByLabelText('Close toast'));
    expect(handleClose).toHaveBeenCalled();
  });
});
