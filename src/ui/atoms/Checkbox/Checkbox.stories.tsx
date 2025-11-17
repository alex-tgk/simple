import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Default checkbox',
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked checkbox',
    defaultChecked: true,
  },
};

export const Small: Story = {
  args: {
    label: 'Small checkbox',
    checkboxSize: 'small',
  },
};

export const Large: Story = {
  args: {
    label: 'Large checkbox',
    checkboxSize: 'large',
  },
};

export const Success: Story = {
  args: {
    label: 'Success checkbox',
    colorScheme: 'success',
    defaultChecked: true,
  },
};

export const Danger: Story = {
  args: {
    label: 'Danger checkbox',
    colorScheme: 'danger',
    defaultChecked: true,
  },
};

export const Error: Story = {
  args: {
    label: 'Error state',
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled checkbox',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled checked',
    disabled: true,
    defaultChecked: true,
  },
};
