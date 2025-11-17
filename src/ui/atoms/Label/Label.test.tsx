import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Label } from './Label';

describe('Label', () => {
  it('renders label element', () => {
    render(<Label>Test label</Label>);
    expect(screen.getByText('Test label')).toBeInTheDocument();
  });

  it('shows required asterisk', () => {
    render(<Label required>Required field</Label>);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('applies disabled styles', () => {
    render(<Label disabled data-testid="label">Disabled</Label>);
    const label = screen.getByTestId('label');
    expect(label).toHaveClass('opacity-50');
  });

  it('applies size classes', () => {
    render(<Label labelSize="small" data-testid="label">Small</Label>);
    const label = screen.getByTestId('label');
    expect(label).toHaveClass('text-sm');
  });
});
