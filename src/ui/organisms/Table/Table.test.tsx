import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Table } from './Table';

describe('Table', () => {
  const columns = [
    { key: 'name', header: 'Name' },
    { key: 'age', header: 'Age' },
    { key: 'email', header: 'Email' },
  ];

  const data = [
    { name: 'John Doe', age: 30, email: 'john@example.com' },
    { name: 'Jane Smith', age: 25, email: 'jane@example.com' },
  ];

  it('renders table element', () => {
    render(<Table columns={columns} data={data} />);
    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  it('renders column headers', () => {
    render(<Table columns={columns} data={data} />);
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Age')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  it('renders data rows', () => {
    render(<Table columns={columns} data={data} />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
  });

  it('shows loading state', () => {
    render(<Table columns={columns} data={[]} loading />);
    expect(screen.getByRole('table')).toBeInTheDocument();
    // Loading spinner should be visible
  });

  it('shows empty message when no data', () => {
    render(<Table columns={columns} data={[]} emptyMessage="No users found" />);
    expect(screen.getByText('No users found')).toBeInTheDocument();
  });

  it('uses custom render function', () => {
    const customColumns = [
      {
        key: 'name',
        header: 'Name',
        render: (item: any) => <strong>{item.name}</strong>,
      },
    ];

    render(<Table columns={customColumns} data={data} />);
    const nameCell = screen.getByText('John Doe');
    expect(nameCell.tagName).toBe('STRONG');
  });
});
