// Import necessary functions and components for testing from libraries
import { render, screen } from '@testing-library/react';
import App from './App'; // Import the 'App' component to be tested

// Define a test case using the 'test' function provided by the testing library
test('renders learn react link', () => {
  // Render the 'App' component for testing
  render(<App />);
  
  // Find an element in the rendered component that contains the text "learn react" (case insensitive)
  const linkElement = screen.getByText(/learn react/i);
  
  // Expect that the 'linkElement' is present in the rendered component
  expect(linkElement).toBeInTheDocument();
});
