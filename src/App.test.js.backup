import { render, screen } from '@testing-library/react';
import App from './App';

test('page heading exists', () => {
  render(<App />);
  const heading = screen.getByText(/test management/i);
  expect(heading).toBeInTheDocument();
  expect(heading).toHaveTextContent('Test Management Systems');
});

test('page text exists', () => {
  render(<App />);
  const mainImage = screen.getByAltText(/logo/);
  expect(mainImage).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
