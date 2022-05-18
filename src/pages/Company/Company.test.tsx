import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Company from './Company';

test('renders Company Page with a back button', () => {
    render(
        <MemoryRouter>
            <Company />
        </MemoryRouter>);
    const backButton = screen.getByText('Go Back');
    expect(backButton).toBeInTheDocument();
});