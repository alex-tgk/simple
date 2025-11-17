import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Molecules/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const sampleItems = [
  {
    title: 'What is your return policy?',
    content: 'We offer a 30-day return policy on all items. Items must be in original condition with tags attached.',
  },
  {
    title: 'How long does shipping take?',
    content: 'Standard shipping takes 5-7 business days. Express shipping is available and takes 2-3 business days.',
  },
  {
    title: 'Do you ship internationally?',
    content: 'Yes, we ship to most countries worldwide. International shipping costs and delivery times vary by location.',
  },
];

export const Default: Story = {
  args: {
    items: sampleItems,
  },
};

export const DefaultOpen: Story = {
  args: {
    items: sampleItems,
    defaultIndex: 0,
  },
};

export const AllowMultiple: Story = {
  args: {
    items: sampleItems,
    allowMultiple: true,
    defaultIndex: [0, 1],
  },
};

export const WithDisabled: Story = {
  args: {
    items: [
      ...sampleItems,
      {
        title: 'Disabled Item',
        content: 'This item is disabled',
        disabled: true,
      },
    ],
  },
};

export const LongContent: Story = {
  args: {
    items: [
      {
        title: 'Terms and Conditions',
        content: (
          <div>
            <p className="mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="mb-2">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        ),
      },
      {
        title: 'Privacy Policy',
        content: 'Your privacy is important to us. We collect and use your personal information only as described in this policy.',
      },
    ],
  },
};
