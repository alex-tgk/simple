import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from './Toast';
import { Button } from '../../atoms/Button';
import { useState } from 'react';

const meta: Meta<typeof Toast> = {
  title: 'Molecules/Toast',
  component: Toast,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  render: () => {
    const [show, setShow] = useState(false);

    return (
      <div className="p-8">
        <Button onClick={() => setShow(true)}>Show Toast</Button>
        {show && (
          <Toast
            title="Notification"
            description="This is a toast notification."
            onClose={() => setShow(false)}
          />
        )}
      </div>
    );
  },
};

export const Status: Story = {
  render: () => {
    const [toasts, setToasts] = useState<string[]>([]);

    const addToast = (type: string) => {
      setToasts(prev => [...prev, type]);
      setTimeout(() => {
        setToasts(prev => prev.filter(t => t !== type));
      }, 3000);
    };

    return (
      <div className="p-8">
        <div className="flex gap-2">
          <Button onClick={() => addToast('info')}>Info</Button>
          <Button onClick={() => addToast('success')}>Success</Button>
          <Button onClick={() => addToast('warning')}>Warning</Button>
          <Button onClick={() => addToast('error')}>Error</Button>
        </div>

        {toasts.includes('info') && (
          <Toast
            status="info"
            title="Info"
            description="This is an informational message."
            onClose={() => setToasts(prev => prev.filter(t => t !== 'info'))}
          />
        )}
        {toasts.includes('success') && (
          <Toast
            status="success"
            title="Success"
            description="Operation completed successfully."
            position="top-right"
            onClose={() => setToasts(prev => prev.filter(t => t !== 'success'))}
          />
        )}
        {toasts.includes('warning') && (
          <Toast
            status="warning"
            title="Warning"
            description="Please be careful."
            position="bottom-right"
            onClose={() => setToasts(prev => prev.filter(t => t !== 'warning'))}
          />
        )}
        {toasts.includes('error') && (
          <Toast
            status="error"
            title="Error"
            description="Something went wrong."
            position="bottom-left"
            onClose={() => setToasts(prev => prev.filter(t => t !== 'error'))}
          />
        )}
      </div>
    );
  },
};

export const Positions: Story = {
  render: () => (
    <div className="p-8">
      <Toast position="top-right" title="Top Right" description="Position: top-right" />
      <Toast position="top-left" title="Top Left" description="Position: top-left" />
      <Toast position="bottom-right" title="Bottom Right" description="Position: bottom-right" />
      <Toast position="bottom-left" title="Bottom Left" description="Position: bottom-left" />
    </div>
  ),
};
