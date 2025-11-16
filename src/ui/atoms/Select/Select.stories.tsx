import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Atoms/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    children: (
      <>
        <option value="">Select an option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </>
    ),
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    children: (
      <>
        <option value="">Select an option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </>
    ),
  },
};

export const Flushed: Story = {
  args: {
    variant: 'flushed',
    children: (
      <>
        <option value="">Select an option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </>
    ),
  },
};

export const Small: Story = {
  args: {
    selectSize: 'small',
    children: (
      <>
        <option value="">Small select</option>
        <option value="1">Option 1</option>
      </>
    ),
  },
};

export const Large: Story = {
  args: {
    selectSize: 'large',
    children: (
      <>
        <option value="">Large select</option>
        <option value="1">Option 1</option>
      </>
    ),
  },
};

export const Error: Story = {
  args: {
    error: true,
    children: (
      <>
        <option value="">Error state</option>
        <option value="1">Option 1</option>
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: (
      <>
        <option value="">Disabled select</option>
        <option value="1">Option 1</option>
      </>
    ),
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: (
      <>
        <option value="">Full width select</option>
        <option value="1">Option 1</option>
      </>
    ),
  },
  parameters: {
    layout: 'padded',
  },
};
