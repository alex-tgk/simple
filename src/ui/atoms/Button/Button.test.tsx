import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button.tsx';

describe('Button', () => {
  it('renders button with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} disabled>
        Click me
      </Button>
    );

    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('applies primary variant classes', () => {
    const { container } = render(<Button variant="primary">Primary</Button>);
    const button = container.querySelector('button');
    expect(button?.className).toContain('bg-blue-600');
  });

  it('applies secondary variant classes', () => {
    const { container } = render(<Button variant="secondary">Secondary</Button>);
    const button = container.querySelector('button');
    expect(button?.className).toContain('bg-gray-200');
  });

  it('applies danger variant classes', () => {
    const { container } = render(<Button variant="danger">Danger</Button>);
    const button = container.querySelector('button');
    expect(button?.className).toContain('bg-red-600');
  });

  it('applies small size classes', () => {
    const { container } = render(<Button size="small">Small</Button>);
    const button = container.querySelector('button');
    expect(button?.className).toContain('px-3');
  });

  it('applies medium size classes', () => {
    const { container } = render(<Button size="medium">Medium</Button>);
    const button = container.querySelector('button');
    expect(button?.className).toContain('px-4');
  });

  it('applies large size classes', () => {
    const { container } = render(<Button size="large">Large</Button>);
    const button = container.querySelector('button');
    expect(button?.className).toContain('px-6');
  });
});
