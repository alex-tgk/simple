import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Atoms/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    width: '100%',
    height: 20,
  },
};

export const Text: Story = {
  render: () => (
    <div className="w-full max-w-md flex flex-col gap-2">
      <Skeleton variant="text" width="100%" />
      <Skeleton variant="text" width="100%" />
      <Skeleton variant="text" width="60%" />
    </div>
  ),
};

export const Circular: Story = {
  render: () => (
    <div className="flex gap-4">
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="circular" width={60} height={60} />
      <Skeleton variant="circular" width={80} height={80} />
    </div>
  ),
};

export const Rectangular: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Skeleton variant="rectangular" width="100%" height={100} />
      <Skeleton variant="rectangular" width="100%" height={200} />
    </div>
  ),
};

export const Animations: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div>
        <p className="text-sm text-gray-600 mb-2">Pulse</p>
        <Skeleton animation="pulse" width="100%" height={40} />
      </div>
      <div>
        <p className="text-sm text-gray-600 mb-2">Wave</p>
        <Skeleton animation="wave" width="100%" height={40} />
      </div>
      <div>
        <p className="text-sm text-gray-600 mb-2">None</p>
        <Skeleton animation="none" width="100%" height={40} />
      </div>
    </div>
  ),
};

export const CardSkeleton: Story = {
  render: () => (
    <div className="w-full max-w-sm border rounded-lg p-4">
      <div className="flex items-center gap-4 mb-4">
        <Skeleton variant="circular" width={48} height={48} />
        <div className="flex-1">
          <Skeleton variant="text" width="60%" height={16} />
          <Skeleton variant="text" width="40%" height={14} className="mt-2" />
        </div>
      </div>
      <Skeleton variant="rectangular" width="100%" height={200} className="mb-4" />
      <Skeleton variant="text" width="100%" />
      <Skeleton variant="text" width="100%" className="mt-2" />
      <Skeleton variant="text" width="80%" className="mt-2" />
    </div>
  ),
};
