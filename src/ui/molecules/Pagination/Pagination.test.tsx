import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Pagination } from './Pagination';

describe('Pagination', () => {
  const handleChange = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
  });

  it('renders pagination element', () => {
    render(
      <Pagination totalPages={5} currentPage={1} onChange={handleChange} />
    );
    expect(screen.getByLabelText('Pagination')).toBeInTheDocument();
  });

  it('renders page numbers', () => {
    render(
      <Pagination totalPages={5} currentPage={1} onChange={handleChange} />
    );
    expect(screen.getByLabelText('Page 1')).toBeInTheDocument();
    expect(screen.getByLabelText('Page 5')).toBeInTheDocument();
  });

  it('highlights current page', () => {
    render(
      <Pagination totalPages={5} currentPage={3} onChange={handleChange} />
    );
    const currentPageButton = screen.getByLabelText('Page 3');
    expect(currentPageButton).toHaveClass('bg-primary-600');
  });

  it('calls onChange when page is clicked', async () => {
    const user = userEvent.setup();
    render(
      <Pagination totalPages={5} currentPage={1} onChange={handleChange} />
    );

    await user.click(screen.getByLabelText('Page 3'));
    expect(handleChange).toHaveBeenCalledWith(3);
  });

  it('shows previous and next buttons', () => {
    render(
      <Pagination
        totalPages={5}
        currentPage={3}
        onChange={handleChange}
        showPrevNext
      />
    );
    expect(screen.getByLabelText('Previous page')).toBeInTheDocument();
    expect(screen.getByLabelText('Next page')).toBeInTheDocument();
  });

  it('shows first and last buttons', () => {
    render(
      <Pagination
        totalPages={5}
        currentPage={3}
        onChange={handleChange}
        showFirstLast
      />
    );
    expect(screen.getByLabelText('First page')).toBeInTheDocument();
    expect(screen.getByLabelText('Last page')).toBeInTheDocument();
  });
});
