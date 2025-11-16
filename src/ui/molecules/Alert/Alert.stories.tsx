import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Molecules/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    children: 'This is an informational alert message.',
  },
};

export const WithTitle: Story = {
  args: {
    title: 'Alert Title',
    children: 'This alert has a title for better organization.',
  },
};

export const Status: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Alert status="info" title="Info">
        This is an informational message.
      </Alert>
      <Alert status="success" title="Success">
        Your action was completed successfully.
      </Alert>
      <Alert status="warning" title="Warning">
        Please be careful with this action.
      </Alert>
      <Alert status="error" title="Error">
        An error occurred while processing your request.
      </Alert>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Alert variant="subtle" status="info" title="Subtle Variant">
        Soft background with colored text.
      </Alert>
      <Alert variant="solid" status="info" title="Solid Variant">
        Solid background with white text.
      </Alert>
      <Alert variant="left-accent" status="info" title="Left Accent Variant">
        White background with left border accent.
      </Alert>
    </div>
  ),
};

export const Closable: Story = {
  args: {
    closable: true,
    title: 'Closable Alert',
    children: 'This alert can be dismissed.',
    onClose: () => console.log('Alert closed'),
  },
};
