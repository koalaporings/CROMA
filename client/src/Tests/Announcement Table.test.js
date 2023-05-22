import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AnnouncementTable from '../Pages/Admin Portal/Announcement Table';

describe('AnnouncementTable', () => {
  test('renders AnnouncementTable component', () => {
    render(<AnnouncementTable />);

    // Check if the announcement icon is rendered
    expect(screen.getByAltText('announcement-icon')).toBeInTheDocument();

    // Check if the announcement text is rendered
    expect(screen.getByText('Announcement')).toBeInTheDocument();

    // Check if the table is rendered
    expect(screen.getByRole('table')).toHaveClass('announcement-table');
    
    // Check if the table rows are rendered
    const tableRows = screen.getAllByRole('row');
    expect(tableRows).toHaveLength(4);

    // Check if the date and time are rendered
    tableRows.forEach((row) => {
      expect(row.querySelector('.announcement-date .date-box')).toHaveTextContent('1/3/22 | 11:50 am');
    });

    // Check if the announcement info is rendered
    tableRows.forEach((row) => {
      expect(row.querySelector('.announcement-info')).toHaveTextContent('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at porttitor er....');
    });
  });
});
