import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '../Components/Header/Header';

describe('Header component', () => {
  test('renders header-component with expected elements', () => {
    render(<Header />);

    // Check for main header component
    expect(screen.getByTestId('header-component')).toBeInTheDocument();

    // Check for logo and background images
    expect(screen.getByAltText('header-logo')).toBeInTheDocument();
    expect(screen.getByAltText('header-bg-1')).toBeInTheDocument();

    // Check for header text elements
    expect(screen.getByText('University of the Philippines Cebu - College of Science')).toBeInTheDocument();
    expect(screen.getByText('Office of the College Secretary')).toBeInTheDocument();
    expect(screen.getByText('Automated Request System')).toBeInTheDocument();
  });
});
