import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TransactionTable from '../Pages/Admin Portal/Transaction Table';
import '@testing-library/jest-dom';
import React from 'react';

describe('TransactionTable', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

//   test('renders table with fetched data', async () => {
//     const mockData = [
//       {
//         id: 1,
//         urgent: 1,
//         date: '10/01/2022',
//         student_name: 'Gabriel Howard Awatin',
//         transaction_name: 'True Copy of Grades'
//       },
//       {
//         id: 2,
//         urgent: 0,
//         date: '10/02/2022',
//         student_name: 'John Oliver Ochea',
//         transaction_name: 'True Copy of Grades'
//       }
//     ];

//     fetch.mockResponseOnce(JSON.stringify(mockData));

//     render(<TransactionTable />);

//     const transactionRequestsLabel = screen.getByText('Transaction Requests');
//     expect(transactionRequestsLabel).toBeInTheDocument();

//     const dateOption = await screen.findByText('Date');
//     expect(dateOption).toBeInTheDocument();

//     mockData.forEach(async (item) => {
//       const dateElement = await screen.findByText(item.date);
//       expect(dateElement).toBeInTheDocument();

//       const studentNameElement = await screen.findByText(item.student_name);
//       expect(studentNameElement).toBeInTheDocument();

//       const transactionNameElement = await screen.findByText(item.transaction_name);
//       expect(transactionNameElement).toBeInTheDocument();
//     });
//   });

  test('renders urgent icon and text when urgent is true', async () => {
    const mockData = [
      {
        id: 1,
        urgent: 1,
        date: '10/01/2022',
        student_name: 'Gabriel Howard Awatin',
        transaction_name: 'True Copy of Grades'
      }
    ];

    fetch.mockResponseOnce(JSON.stringify(mockData));

    render(<TransactionTable />);

    const urgentElement = await screen.findByText('URGENT');
    expect(urgentElement).toBeInTheDocument();
  });

  test('does not render urgent icon and text when urgent is false', async () => {
    const mockData = [
      {
        id: 2,
        urgent: 0,
        date: '10/02/2022',
        student_name: 'John Oliver Ochea',
        transaction_name: 'True Copy of Grades'
      }
    ];

    fetch.mockResponseOnce(JSON.stringify(mockData));

    render(<TransactionTable />);

    const urgentElement = screen.queryByText('URGENT');
    expect(urgentElement).not.toBeInTheDocument();
  });
});
