import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import OngoingTable from '../Pages/Admin Portal/Ongoing Table';

describe('OngoingTable', () => {
  test('renders OngoingTable component', () => {
    render(<OngoingTable />);

    // Check if the table label is rendered
    expect(screen.getByText('Ongoing Transaction')).toBeInTheDocument();

    // Check if the search and filter elements are rendered
    expect(screen.getByLabelText('Filter by:')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toHaveAttribute('id', 'ongoing-filter');
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();

    // Check if the table is rendered
    expect(screen.getByRole('table')).toHaveClass('table1');

    // Check if the table header is rendered
    const headerCells = screen.getAllByRole('columnheader');
    expect(headerCells).toHaveLength(6);

    // Check if the table rows are rendered
    const tableRows = screen.getAllByRole('row');
    expect(tableRows).toHaveLength(11);

    // Check if the urgent row and icon are rendered
    const urgentRow = tableRows[1];
    expect(urgentRow).toHaveClass('urgent-row');
    expect(urgentRow.querySelector('.urgent .urgent-icon')).toBeInTheDocument();

    // Check if the table footer is rendered
    expect(screen.getByText('DISPLAY 1 OUT OF 1')).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(19);
  });
});
