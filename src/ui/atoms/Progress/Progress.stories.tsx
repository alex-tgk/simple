import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from './Progress';

const meta: Meta<typeof Progress> = {
  title: 'Atoms/Progress',
  component: Progress,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    value: 50,
  },
};

export const WithLabel: Story = {
  args: {
    value: 75,
    showLabel: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Progress value={40} progressSize="small" />
      <Progress value={60} progressSize="medium" />
      <Progress value={80} progressSize="large" />
    </div>
  ),
};

export const ColorSchemes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Progress value={60} colorScheme="primary" />
      <Progress value={60} colorScheme="secondary" />
      <Progress value={60} colorScheme="success" />
      <Progress value={60} colorScheme="warning" />
      <Progress value={60} colorScheme="danger" />
      <Progress value={60} colorScheme="info" />
    </div>
  ),
};

export const Striped: Story = {
  args: {
    value: 65,
    variant: 'striped',
  },
};

export const ProgressStates: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Progress value={0} showLabel colorScheme="danger" />
      <Progress value={25} showLabel colorScheme="warning" />
      <Progress value={50} showLabel colorScheme="info" />
      <Progress value={75} showLabel colorScheme="primary" />
      <Progress value={100} showLabel colorScheme="success" />
    </div>
  ),
};
