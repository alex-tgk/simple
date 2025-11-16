import type { Meta, StoryObj } from '@storybook/react';
import { Modal, ModalFooter } from './Modal';
import { Button } from '../../atoms/Button';
import { useState } from 'react';

const meta: Meta<typeof Modal> = {
  title: 'Molecules/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Modal Title"
        >
          <p>This is the modal content. You can put any content here.</p>
          <ModalFooter>
            <Button variant="secondary" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsOpen(false)}>
              Confirm
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [size, setSize] = useState<'small' | 'medium' | 'large' | 'full'>('medium');
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <div className="flex gap-2">
          <Button onClick={() => { setSize('small'); setIsOpen(true); }}>
            Small
          </Button>
          <Button onClick={() => { setSize('medium'); setIsOpen(true); }}>
            Medium
          </Button>
          <Button onClick={() => { setSize('large'); setIsOpen(true); }}>
            Large
          </Button>
          <Button onClick={() => { setSize('full'); setIsOpen(true); }}>
            Full
          </Button>
        </div>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title={`${size.charAt(0).toUpperCase() + size.slice(1)} Modal`}
          size={size}
        >
          <p>This is a {size} sized modal.</p>
          <ModalFooter>
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};

export const LongContent: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Terms and Conditions"
        >
          <div className="max-h-96 overflow-y-auto">
            {Array.from({ length: 10 }).map((_, i) => (
              <p key={i} className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris.
              </p>
            ))}
          </div>
          <ModalFooter>
            <Button onClick={() => setIsOpen(false)}>I Agree</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};
