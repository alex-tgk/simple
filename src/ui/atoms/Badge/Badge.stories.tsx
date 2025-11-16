import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: 'Default',
  },
};

export const Solid: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Badge colorScheme="primary">Primary</Badge>
      <Badge colorScheme="secondary">Secondary</Badge>
      <Badge colorScheme="success">Success</Badge>
      <Badge colorScheme="warning">Warning</Badge>
      <Badge colorScheme="danger">Danger</Badge>
      <Badge colorScheme="info">Info</Badge>
    </div>
  ),
};

export const Outline: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Badge variant="outline" colorScheme="primary">Primary</Badge>
      <Badge variant="outline" colorScheme="secondary">Secondary</Badge>
      <Badge variant="outline" colorScheme="success">Success</Badge>
      <Badge variant="outline" colorScheme="warning">Warning</Badge>
      <Badge variant="outline" colorScheme="danger">Danger</Badge>
      <Badge variant="outline" colorScheme="info">Info</Badge>
    </div>
  ),
};

export const Subtle: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Badge variant="subtle" colorScheme="primary">Primary</Badge>
      <Badge variant="subtle" colorScheme="secondary">Secondary</Badge>
      <Badge variant="subtle" colorScheme="success">Success</Badge>
      <Badge variant="subtle" colorScheme="warning">Warning</Badge>
      <Badge variant="subtle" colorScheme="danger">Danger</Badge>
      <Badge variant="subtle" colorScheme="info">Info</Badge>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-2 items-center">
      <Badge badgeSize="small">Small</Badge>
      <Badge badgeSize="medium">Medium</Badge>
      <Badge badgeSize="large">Large</Badge>
    </div>
  ),
};
