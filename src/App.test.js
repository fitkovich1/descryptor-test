import React from 'react';
import { render } from '@testing-library/react';
import Decryption from './Decryption';

test('renders learn react link', () => {
  const { getByText } = render(<Decryption />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
