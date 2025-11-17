import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Atoms/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {},
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Spinner spinnerSize="small" />
      <Spinner spinnerSize="medium" />
      <Spinner spinnerSize="large" />
      <Spinner spinnerSize="xlarge" />
    </div>
  ),
};

export const ColorSchemes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Spinner colorScheme="primary" />
      <Spinner colorScheme="secondary" />
      <Spinner colorScheme="success" />
      <Spinner colorScheme="warning" />
      <Spinner colorScheme="danger" />
    </div>
  ),
};

export const Thickness: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Spinner thickness="thin" />
      <Spinner thickness="medium" />
      <Spinner thickness="thick" />
    </div>
  ),
};

export const OnDarkBackground: Story = {
  render: () => (
    <div className="bg-gray-800 p-8 rounded">
      <Spinner colorScheme="white" />
    </div>
  ),
};
