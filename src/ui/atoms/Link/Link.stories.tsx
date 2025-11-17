import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './Link';

const meta: Meta<typeof Link> = {
  title: 'Atoms/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    href: '#',
    children: 'Default link',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Link href="#" variant="default">Default variant</Link>
      <Link href="#" variant="underline">Underline variant</Link>
      <Link href="#" variant="hover-underline">Hover underline variant</Link>
    </div>
  ),
};

export const ColorSchemes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Link href="#" colorScheme="primary">Primary link</Link>
      <Link href="#" colorScheme="secondary">Secondary link</Link>
      <Link href="#" colorScheme="success">Success link</Link>
      <Link href="#" colorScheme="danger">Danger link</Link>
      <Link href="#" colorScheme="muted">Muted link</Link>
    </div>
  ),
};

export const External: Story = {
  args: {
    href: 'https://example.com',
    isExternal: true,
    children: 'External link',
  },
};

export const Disabled: Story = {
  args: {
    href: '#',
    disabled: true,
    children: 'Disabled link',
  },
};
