import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';
import { Badge } from '../../atoms/Badge';

const meta: Meta<typeof Table> = {
  title: 'Organisms/Table',
  component: Table,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Table>;

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
}

const users: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'active' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'inactive' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Manager', status: 'active' },
];

const columns = [
  { key: 'name', header: 'Name' },
  { key: 'email', header: 'Email' },
  { key: 'role', header: 'Role' },
  {
    key: 'status',
    header: 'Status',
    render: (user: User) => (
      <Badge
        variant="subtle"
        colorScheme={user.status === 'active' ? 'success' : 'danger'}
      >
        {user.status}
      </Badge>
    ),
  },
];

export const Default: Story = {
  args: {
    columns,
    data: users,
  },
};

export const Striped: Story = {
  args: {
    columns,
    data: users,
    variant: 'striped',
  },
};

export const Bordered: Story = {
  args: {
    columns,
    data: users,
    variant: 'bordered',
  },
};

export const Hoverable: Story = {
  args: {
    columns,
    data: users,
    hoverable: true,
  },
};

export const Loading: Story = {
  args: {
    columns,
    data: [],
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    columns,
    data: [],
    emptyMessage: 'No users found. Try adjusting your filters.',
  },
};
