import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Atoms/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your message...',
    rows: 4,
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    placeholder: 'Filled variant',
    rows: 4,
  },
};

export const Flushed: Story = {
  args: {
    variant: 'flushed',
    placeholder: 'Flushed variant',
    rows: 4,
  },
};

export const Error: Story = {
  args: {
    error: true,
    placeholder: 'Error state',
    defaultValue: 'Invalid content',
    rows: 4,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled textarea',
    rows: 4,
  },
};

export const NoResize: Story = {
  args: {
    resize: 'none',
    placeholder: 'No resize',
    rows: 4,
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    placeholder: 'Full width textarea',
    rows: 4,
  },
  parameters: {
    layout: 'padded',
  },
};
