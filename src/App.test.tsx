import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Companies header', () => {
  render(<App />);
  const linkElement = screen.getByText('Companies');
  expect(linkElement).toBeInTheDocument();
});
