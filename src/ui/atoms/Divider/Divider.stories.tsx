import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Atoms/Divider',
  component: Divider,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    label: 'OR',
  },
};

export const LabelPositions: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <Divider label="Left" labelPosition="left" />
      <Divider label="Center" labelPosition="center" />
      <Divider label="Right" labelPosition="right" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <Divider variant="solid" label="Solid" />
      <Divider variant="dashed" label="Dashed" />
      <Divider variant="dotted" label="Dotted" />
    </div>
  ),
};

export const Thickness: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <Divider thickness="thin" label="Thin" />
      <Divider thickness="medium" label="Medium" />
      <Divider thickness="thick" label="Thick" />
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex gap-4 h-32 items-center">
      <span>Left content</span>
      <Divider orientation="vertical" />
      <span>Middle content</span>
      <Divider orientation="vertical" thickness="medium" />
      <span>Right content</span>
    </div>
  ),
};
