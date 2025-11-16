import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Atoms/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    label: 'Default switch',
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked switch',
    defaultChecked: true,
  },
};

export const Small: Story = {
  args: {
    label: 'Small switch',
    switchSize: 'small',
  },
};

export const Large: Story = {
  args: {
    label: 'Large switch',
    switchSize: 'large',
  },
};

export const Success: Story = {
  args: {
    label: 'Success switch',
    colorScheme: 'success',
    defaultChecked: true,
  },
};

export const Danger: Story = {
  args: {
    label: 'Danger switch',
    colorScheme: 'danger',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled switch',
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

export const WithoutLabel: Story = {
  args: {},
};
