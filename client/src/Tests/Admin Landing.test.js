import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AdminLanding from '../Pages/Admin Portal/Admin Landing.jsx';
import Header from '../Components/Header/Header.jsx';
import Footer from '../Components/Footer/Footer.jsx';
import NavBar from '../Components/Navigation Bar/NavBar.jsx';
import AnnouncementTable from '../Pages/Admin Portal/Announcement Table.jsx';
import TableComponent from '../Components/Table/Table.jsx';
import OngoingTable from '../Pages/Admin Portal/Ongoing Table.jsx';

jest.mock('react-router-dom', () => ({
    useNavigate: () => jest.fn(),
}));

jest.mock('../Pages/Admin Portal/Announcement Table.jsx', () => jest.fn(() => <div>AnnouncementTable</div>));
jest.mock('../Pages/Admin Portal/Ongoing Table.jsx', () => jest.fn(() => <div>OngoingTable</div>));
jest.mock('../Components/Header/Header', () => jest.fn(() => <div>Header</div>));
jest.mock('../Components/Footer/Footer', () => jest.fn(() => <div>Footer</div>));
jest.mock('../Components/Navigation Bar/NavBar', () => jest.fn(() => <div>NavBar</div>));
jest.mock('../Components/Table/Table', () => jest.fn(() => <div>TableComponent</div>));

describe('AdminLanding component', () => {
    beforeEach(() => {
        render(<AdminLanding />);
    });

    test('renders NavBar component', () => {
        expect(screen.getByText('NavBar')).toBeInTheDocument();
    });

    test('renders AnnouncementTable component', () => {
        expect(screen.getByText('AnnouncementTable')).toBeInTheDocument();
    });

    test('renders TableComponent', () => {
        expect(screen.getByText('TableComponent')).toBeInTheDocument();
    });

    test('renders OngoingTable component', () => {
        expect(screen.getByText('OngoingTable')).toBeInTheDocument();
    });
    
});
