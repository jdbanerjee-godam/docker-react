import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  console.log(screen)
  const linkElement = screen.getByText(/its working fine now!/i);
  expect(linkElement).toBeInTheDocument();
});
