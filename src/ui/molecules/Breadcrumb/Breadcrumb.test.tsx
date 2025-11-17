import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Breadcrumb } from './Breadcrumb';

describe('Breadcrumb', () => {
  const items = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Electronics' },
  ];

  it('renders breadcrumb element', () => {
    render(<Breadcrumb items={items} />);
    expect(screen.getByLabelText('Breadcrumb')).toBeInTheDocument();
  });

  it('renders all items', () => {
    render(<Breadcrumb items={items} />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('Electronics')).toBeInTheDocument();
  });

  it('renders links for non-current items', () => {
    render(<Breadcrumb items={items} />);
    const homeLink = screen.getByText('Home');
    expect(homeLink.tagName).toBe('A');
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('marks last item as current page', () => {
    render(<Breadcrumb items={items} />);
    const lastItem = screen.getByText('Electronics');
    expect(lastItem).toHaveAttribute('aria-current', 'page');
  });

  it('renders custom separator', () => {
    render(<Breadcrumb items={items} separator=">" />);
    const separators = screen.getAllByText('>');
    expect(separators).toHaveLength(2); // n-1 separators
  });
});
