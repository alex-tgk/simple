import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardBody, CardFooter } from './Card';
import { Button } from '../../atoms/Button';

const meta: Meta<typeof Card> = {
  title: 'Molecules/Card',
  component: Card,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card>
      <CardHeader title="Card Title" subtitle="Card subtitle goes here" />
      <CardBody>
        This is the card body content. It can contain any content you want.
      </CardBody>
    </Card>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Card>
      <CardHeader title="Card with Footer" subtitle="Including action buttons" />
      <CardBody>
        This card includes a footer section with action buttons.
      </CardBody>
      <CardFooter>
        <div className="flex gap-2 justify-end">
          <Button variant="secondary" size="small">Cancel</Button>
          <Button size="small">Confirm</Button>
        </div>
      </CardFooter>
    </Card>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Card variant="elevated">
        <CardHeader title="Elevated Card" />
        <CardBody>Shadow-based styling</CardBody>
      </Card>
      <Card variant="outlined">
        <CardHeader title="Outlined Card" />
        <CardBody>Border-based styling</CardBody>
      </Card>
      <Card variant="filled">
        <CardHeader title="Filled Card" />
        <CardBody>Background-based styling</CardBody>
      </Card>
    </div>
  ),
};

export const Padding: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Card padding="small">
        <CardHeader title="Small Padding" />
        <CardBody>Compact card</CardBody>
      </Card>
      <Card padding="medium">
        <CardHeader title="Medium Padding" />
        <CardBody>Default padding</CardBody>
      </Card>
      <Card padding="large">
        <CardHeader title="Large Padding" />
        <CardBody>Spacious card</CardBody>
      </Card>
    </div>
  ),
};

export const Hoverable: Story = {
  render: () => (
    <Card hoverable>
      <CardHeader title="Hoverable Card" subtitle="Hover over me!" />
      <CardBody>
        This card has a hover effect and can be used for clickable items.
      </CardBody>
    </Card>
  ),
};
