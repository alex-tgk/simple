import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Atoms/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    label: 'Default radio',
    name: 'default',
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked radio',
    defaultChecked: true,
    name: 'checked',
  },
};

export const Small: Story = {
  args: {
    label: 'Small radio',
    radioSize: 'small',
    name: 'small',
  },
};

export const Large: Story = {
  args: {
    label: 'Large radio',
    radioSize: 'large',
    name: 'large',
  },
};

export const Success: Story = {
  args: {
    label: 'Success radio',
    colorScheme: 'success',
    defaultChecked: true,
    name: 'success',
  },
};

export const Danger: Story = {
  args: {
    label: 'Danger radio',
    colorScheme: 'danger',
    defaultChecked: true,
    name: 'danger',
  },
};

export const Error: Story = {
  args: {
    label: 'Error state',
    error: true,
    name: 'error',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled radio',
    disabled: true,
    name: 'disabled',
  },
};

export const RadioGroup: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Radio label="Option 1" name="group" defaultChecked />
      <Radio label="Option 2" name="group" />
      <Radio label="Option 3" name="group" />
    </div>
  ),
};
