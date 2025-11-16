import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Select } from './Select';

describe('Select', () => {
  it('renders select element', () => {
    render(
      <Select>
        <option>Option 1</option>
      </Select>
    );
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('renders options', () => {
    render(
      <Select>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </Select>
    );
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  it('applies default variant classes', () => {
    render(
      <Select data-testid="select">
        <option>Test</option>
      </Select>
    );
    const select = screen.getByTestId('select');
    expect(select).toHaveClass('border-gray-300');
  });

  it('applies error state', () => {
    render(
      <Select error data-testid="select">
        <option>Test</option>
      </Select>
    );
    const select = screen.getByTestId('select');
    expect(select).toHaveClass('border-red-500');
  });

  it('handles disabled state', () => {
    render(
      <Select disabled data-testid="select">
        <option>Test</option>
      </Select>
    );
    const select = screen.getByTestId('select');
    expect(select).toBeDisabled();
  });
});
