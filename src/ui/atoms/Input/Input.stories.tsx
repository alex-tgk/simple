import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    placeholder: 'Filled variant',
  },
};

export const Flushed: Story = {
  args: {
    variant: 'flushed',
    placeholder: 'Flushed variant',
  },
};

export const Small: Story = {
  args: {
    inputSize: 'small',
    placeholder: 'Small input',
  },
};

export const Large: Story = {
  args: {
    inputSize: 'large',
    placeholder: 'Large input',
  },
};

export const Error: Story = {
  args: {
    error: true,
    placeholder: 'Error state',
    defaultValue: 'Invalid input',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled input',
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    placeholder: 'Full width input',
  },
  parameters: {
    layout: 'padded',
  },
};
