import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card, CardHeader, CardBody, CardFooter } from './Card';

describe('Card', () => {
  it('renders card element', () => {
    render(<Card data-testid="card">Content</Card>);
    expect(screen.getByTestId('card')).toBeInTheDocument();
  });

  it('applies elevated variant classes', () => {
    render(<Card variant="elevated" data-testid="card">Content</Card>);
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('shadow-md');
  });

  it('applies outlined variant classes', () => {
    render(<Card variant="outlined" data-testid="card">Content</Card>);
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('border');
  });

  it('applies hoverable styles', () => {
    render(<Card hoverable data-testid="card">Content</Card>);
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('hover:shadow-lg');
    expect(card).toHaveClass('cursor-pointer');
  });
});

describe('CardHeader', () => {
  it('renders with title', () => {
    render(<CardHeader title="Card Title" />);
    expect(screen.getByText('Card Title')).toBeInTheDocument();
  });

  it('renders with subtitle', () => {
    render(<CardHeader subtitle="Card Subtitle" />);
    expect(screen.getByText('Card Subtitle')).toBeInTheDocument();
  });
});

describe('CardBody', () => {
  it('renders children', () => {
    render(<CardBody>Body content</CardBody>);
    expect(screen.getByText('Body content')).toBeInTheDocument();
  });
});

describe('CardFooter', () => {
  it('renders children', () => {
    render(<CardFooter>Footer content</CardFooter>);
    expect(screen.getByText('Footer content')).toBeInTheDocument();
  });
});
