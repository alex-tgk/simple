import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';
import { useState } from 'react';

const meta: Meta<typeof Pagination> = {
  title: 'Molecules/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    return (
      <Pagination
        totalPages={10}
        currentPage={currentPage}
        onChange={setCurrentPage}
      />
    );
  },
};

export const WithFirstLast: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    return (
      <Pagination
        totalPages={10}
        currentPage={currentPage}
        onChange={setCurrentPage}
        showFirstLast
      />
    );
  },
};

export const ManyPages: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(25);
    return (
      <Pagination
        totalPages={50}
        currentPage={currentPage}
        onChange={setCurrentPage}
        showFirstLast
      />
    );
  },
};

export const FewPages: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    return (
      <Pagination
        totalPages={3}
        currentPage={currentPage}
        onChange={setCurrentPage}
      />
    );
  },
};
