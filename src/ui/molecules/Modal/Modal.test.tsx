import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Modal } from './Modal';

describe('Modal', () => {
  const handleClose = jest.fn();

  beforeEach(() => {
    handleClose.mockClear();
  });

  it('renders when open', () => {
    render(
      <Modal isOpen={true} onClose={handleClose}>
        Modal content
      </Modal>
    );
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('does not render when closed', () => {
    render(
      <Modal isOpen={false} onClose={handleClose}>
        Modal content
      </Modal>
    );
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders title', () => {
    render(
      <Modal isOpen={true} onClose={handleClose} title="Test Modal">
        Content
      </Modal>
    );
    expect(screen.getByText('Test Modal')).toBeInTheDocument();
  });

  it('calls onClose when close button clicked', async () => {
    const user = userEvent.setup();
    render(
      <Modal isOpen={true} onClose={handleClose} title="Test">
        Content
      </Modal>
    );

    await user.click(screen.getByLabelText('Close modal'));
    expect(handleClose).toHaveBeenCalled();
  });

  it('calls onClose when overlay clicked if closeOnOverlayClick is true', async () => {
    const user = userEvent.setup();
    render(
      <Modal isOpen={true} onClose={handleClose} closeOnOverlayClick>
        Content
      </Modal>
    );

    // Click the backdrop
    const backdrop = screen.getByRole('dialog').firstChild as HTMLElement;
    await user.click(backdrop);
    expect(handleClose).toHaveBeenCalled();
  });

  it('calls onClose on Escape key if closeOnEscape is true', async () => {
    const user = userEvent.setup();
    render(
      <Modal isOpen={true} onClose={handleClose} closeOnEscape>
        Content
      </Modal>
    );

    await user.keyboard('{Escape}');
    expect(handleClose).toHaveBeenCalled();
  });
});
