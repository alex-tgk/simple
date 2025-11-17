import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Avatar } from './Avatar';

describe('Avatar', () => {
  it('renders avatar element', () => {
    render(<Avatar data-testid="avatar" />);
    expect(screen.getByTestId('avatar')).toBeInTheDocument();
  });

  it('renders initials from name', () => {
    render(<Avatar name="John Doe" />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('renders single initial for short name', () => {
    render(<Avatar name="John" />);
    expect(screen.getByText('JO')).toBeInTheDocument();
  });

  it('renders image when src provided', () => {
    render(<Avatar src="https://example.com/avatar.jpg" alt="User avatar" />);
    const img = screen.getByAlt('User avatar');
    expect(img).toBeInTheDocument();
  });

  it('applies size classes', () => {
    render(<Avatar avatarSize="large" data-testid="avatar" />);
    const avatar = screen.getByTestId('avatar');
    expect(avatar).toHaveClass('w-16');
  });

  it('applies color scheme for initials', () => {
    render(<Avatar name="Test" colorScheme="success" data-testid="avatar" />);
    const avatar = screen.getByTestId('avatar');
    expect(avatar).toHaveClass('bg-green-600');
  });
});
