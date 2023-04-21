import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders heading', () => {
  render(<App />);
  expect(screen.getByText('Test Management Systems')).toBeInTheDocument();
});

it('renders sub heading', () => {
  render(<App />);
  expect(screen.getByText('Demo Website for GitHub Actions')).toBeInTheDocument();
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

