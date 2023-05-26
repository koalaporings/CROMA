import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from '../Components/Footer/Footer';

describe('Footer component', () => {
  test('renders footer-component with expected elements', () => {
    render(<Footer />);

    // Check for main footer component
    expect(screen.getByTestId('footer-component')).toBeInTheDocument();

    // Check for footer text elements
    expect(screen.getByText('UNIVERSITY OF THE PHILIPPINES - CEBU')).toBeInTheDocument();
    expect(screen.getByText('COLLEGE OF SCIENCE')).toBeInTheDocument();
    expect(screen.getByText('OFFICE OF THE COLLEGE SECRETARY')).toBeInTheDocument();
    expect(screen.getByText('© 2022 OCS-ARS. All rights reserved.')).toBeInTheDocument();
    expect(screen.getByText('Follow us:')).toBeInTheDocument();
    expect(screen.getByText('Contact us:')).toBeInTheDocument();
    expect(screen.getByText('09123456789 / 123-456')).toBeInTheDocument();
    expect(screen.getByText('loremipsum@up.edu.ph')).toBeInTheDocument();

    // Check for footer icon elements
    expect(screen.getByAltText('footer-component-icon-1')).toBeInTheDocument();
    expect(screen.getByAltText('footer-component-icon-2')).toBeInTheDocument();
    expect(screen.getByAltText('footer-component-icon-3')).toBeInTheDocument();
    expect(screen.getByAltText('footer-component-icon-4')).toBeInTheDocument();
  });
});
