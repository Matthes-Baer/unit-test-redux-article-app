import { screen } from "@testing-library/react";
import App from "../App"; // Import the component that you want to test.
import { renderWithProviders } from "../utils/utils-for-tests"; // Import the adjusted render method to test within a Redux environment.

// A basic unit test that checks for an element that contains a specific text content.
test("renders learn react link", () => {
  renderWithProviders(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
