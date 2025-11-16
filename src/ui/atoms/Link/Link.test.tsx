import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Link } from './Link';

describe('Link', () => {
  it('renders link element', () => {
    render(<Link href="/test">Test link</Link>);
    expect(screen.getByText('Test link')).toBeInTheDocument();
  });

  it('renders with href', () => {
    render(<Link href="/test">Test</Link>);
    const link = screen.getByText('Test');
    expect(link).toHaveAttribute('href', '/test');
  });

  it('applies underline variant', () => {
    render(<Link variant="underline" data-testid="link">Underline</Link>);
    const link = screen.getByTestId('link');
    expect(link).toHaveClass('underline');
  });

  it('handles disabled state', () => {
    render(<Link disabled data-testid="link">Disabled</Link>);
    const link = screen.getByTestId('link');
    expect(link).toHaveClass('opacity-50');
    expect(link).toHaveClass('pointer-events-none');
  });

  it('adds external link attributes', () => {
    render(<Link isExternal href="https://example.com">External</Link>);
    const link = screen.getByText('External');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('applies color scheme', () => {
    render(<Link colorScheme="success" data-testid="link">Success</Link>);
    const link = screen.getByTestId('link');
    expect(link).toHaveClass('text-green-600');
  });
});
