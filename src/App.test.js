import React from 'react';
import { render } from '@testing-library/react';
import App from 'App.js'

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/LOG/);
  expect(linkElement).toBeInTheDocument();
});
