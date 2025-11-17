import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Molecules/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const sampleTabs = [
  {
    label: 'Profile',
    content: (
      <div>
        <h3 className="text-lg font-semibold mb-2">Profile Settings</h3>
        <p className="text-gray-600">Manage your profile information here.</p>
      </div>
    ),
  },
  {
    label: 'Account',
    content: (
      <div>
        <h3 className="text-lg font-semibold mb-2">Account Settings</h3>
        <p className="text-gray-600">Manage your account preferences.</p>
      </div>
    ),
  },
  {
    label: 'Security',
    content: (
      <div>
        <h3 className="text-lg font-semibold mb-2">Security Settings</h3>
        <p className="text-gray-600">Configure your security options.</p>
      </div>
    ),
  },
];

export const Default: Story = {
  args: {
    tabs: sampleTabs,
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h4 className="text-sm font-medium mb-2">Line (default)</h4>
        <Tabs tabs={sampleTabs} variant="line" />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Enclosed</h4>
        <Tabs tabs={sampleTabs} variant="enclosed" />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Soft Rounded</h4>
        <Tabs tabs={sampleTabs} variant="soft-rounded" />
      </div>
    </div>
  ),
};

export const WithDisabled: Story = {
  args: {
    tabs: [
      ...sampleTabs,
      {
        label: 'Disabled',
        content: 'This tab is disabled',
        disabled: true,
      },
    ],
  },
};
