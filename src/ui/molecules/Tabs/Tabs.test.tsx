import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Tabs } from './Tabs';

describe('Tabs', () => {
  const tabs = [
    { label: 'Tab 1', content: 'Content 1' },
    { label: 'Tab 2', content: 'Content 2' },
    { label: 'Tab 3', content: 'Content 3' },
  ];

  it('renders tabs', () => {
    render(<Tabs tabs={tabs} />);
    expect(screen.getByRole('tab', { name: 'Tab 1' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Tab 2' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Tab 3' })).toBeInTheDocument();
  });

  it('shows first tab content by default', () => {
    render(<Tabs tabs={tabs} />);
    expect(screen.getByText('Content 1')).toBeVisible();
    expect(screen.queryByText('Content 2')).not.toBeVisible();
  });

  it('switches tabs on click', async () => {
    const user = userEvent.setup();
    render(<Tabs tabs={tabs} />);

    await user.click(screen.getByRole('tab', { name: 'Tab 2' }));
    expect(screen.getByText('Content 2')).toBeVisible();
    expect(screen.queryByText('Content 1')).not.toBeVisible();
  });

  it('calls onChange when tab is clicked', async () => {
    const handleChange = jest.fn();
    const user = userEvent.setup();
    render(<Tabs tabs={tabs} onChange={handleChange} />);

    await user.click(screen.getByRole('tab', { name: 'Tab 2' }));
    expect(handleChange).toHaveBeenCalledWith(1);
  });

  it('handles disabled tabs', async () => {
    const tabsWithDisabled = [
      { label: 'Tab 1', content: 'Content 1' },
      { label: 'Tab 2', content: 'Content 2', disabled: true },
    ];
    const user = userEvent.setup();
    render(<Tabs tabs={tabsWithDisabled} />);

    const disabledTab = screen.getByRole('tab', { name: 'Tab 2' });
    expect(disabledTab).toBeDisabled();

    await user.click(disabledTab);
    expect(screen.getByText('Content 1')).toBeVisible();
  });
});
