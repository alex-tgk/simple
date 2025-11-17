import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Accordion } from './Accordion';

describe('Accordion', () => {
  const items = [
    { id: '1', title: 'Item 1', content: 'Content 1' },
    { id: '2', title: 'Item 2', content: 'Content 2' },
    { id: '3', title: 'Item 3', content: 'Content 3' },
  ];

  it('renders accordion items', () => {
    render(<Accordion items={items} />);
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByText('Item 3')).toBeInTheDocument();
  });

  it('opens item on click', async () => {
    const user = userEvent.setup();
    render(<Accordion items={items} />);

    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();

    await user.click(screen.getByText('Item 1'));
    expect(screen.getByText('Content 1')).toBeInTheDocument();
  });

  it('closes open item on click', async () => {
    const user = userEvent.setup();
    render(<Accordion items={items} defaultIndex={0} />);

    expect(screen.getByText('Content 1')).toBeInTheDocument();

    await user.click(screen.getByText('Item 1'));
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
  });

  it('allows only one item open when allowMultiple is false', async () => {
    const user = userEvent.setup();
    render(<Accordion items={items} />);

    await user.click(screen.getByText('Item 1'));
    expect(screen.getByText('Content 1')).toBeInTheDocument();

    await user.click(screen.getByText('Item 2'));
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
    expect(screen.getByText('Content 2')).toBeInTheDocument();
  });

  it('allows multiple items open when allowMultiple is true', async () => {
    const user = userEvent.setup();
    render(<Accordion items={items} allowMultiple />);

    await user.click(screen.getByText('Item 1'));
    await user.click(screen.getByText('Item 2'));

    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(screen.getByText('Content 2')).toBeInTheDocument();
  });

  it('handles disabled items', async () => {
    const itemsWithDisabled = [
      { id: '1', title: 'Item 1', content: 'Content 1' },
      { id: '2', title: 'Item 2', content: 'Content 2', disabled: true },
    ];
    const user = userEvent.setup();
    render(<Accordion items={itemsWithDisabled} />);

    const disabledButton = screen.getByText('Item 2').closest('button');
    expect(disabledButton).toBeDisabled();

    await user.click(disabledButton!);
    expect(screen.queryByText('Content 2')).not.toBeInTheDocument();
  });
});
