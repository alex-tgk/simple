import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    name: 'John Doe',
  },
};

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=1',
    alt: 'User avatar',
    name: 'John Doe',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Avatar name="JS" avatarSize="small" />
      <Avatar name="JS" avatarSize="medium" />
      <Avatar name="JS" avatarSize="large" />
      <Avatar name="JS" avatarSize="xlarge" />
    </div>
  ),
};

export const ColorSchemes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Avatar name="PR" colorScheme="primary" />
      <Avatar name="SE" colorScheme="secondary" />
      <Avatar name="SU" colorScheme="success" />
      <Avatar name="WA" colorScheme="warning" />
      <Avatar name="DA" colorScheme="danger" />
      <Avatar name="IN" colorScheme="info" />
    </div>
  ),
};

export const WithoutName: Story = {
  args: {},
};
