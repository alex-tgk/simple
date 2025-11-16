import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';

const meta: Meta<typeof Label> = {
  title: 'Atoms/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: 'Default label',
  },
};

export const Required: Story = {
  args: {
    children: 'Required field',
    required: true,
  },
};

export const Small: Story = {
  args: {
    children: 'Small label',
    labelSize: 'small',
  },
};

export const Large: Story = {
  args: {
    children: 'Large label',
    labelSize: 'large',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled label',
    disabled: true,
  },
};
