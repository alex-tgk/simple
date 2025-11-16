import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Badge } from './Badge';

describe('Badge', () => {
  it('renders badge element', () => {
    render(<Badge>Test badge</Badge>);
    expect(screen.getByText('Test badge')).toBeInTheDocument();
  });

  it('applies solid variant classes', () => {
    render(<Badge variant="solid" data-testid="badge">Solid</Badge>);
    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass('bg-primary-600');
  });

  it('applies outline variant classes', () => {
    render(<Badge variant="outline" data-testid="badge">Outline</Badge>);
    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass('border-2');
  });

  it('applies color scheme', () => {
    render(<Badge colorScheme="success" data-testid="badge">Success</Badge>);
    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass('bg-green-600');
  });

  it('applies size classes', () => {
    render(<Badge badgeSize="small" data-testid="badge">Small</Badge>);
    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass('text-xs');
  });
});
