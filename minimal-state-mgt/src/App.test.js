import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('dark mode changes', async() => {
  render(<App />);
  const themeButton = screen.getByText(/Dark/i);
  expect(themeButton.innerHTML).toBe('Dark');
  act(() => {
    themeButton.dispatchEvent(new MouseEvent('click'), { bubbles: true });
    setTimeout(() => {
      expect(themeButton.innerHTML).toBe('Light');
    }, 500);
  });
  act(() => {
    themeButton.dispatchEvent(new MouseEvent('click'), { bubbles: true });
    setTimeout(() => {
      expect(themeButton.innerHTML).toBe('Dark');
    }, 500);
  });
});
