import App from "../App"; // Import the component that you want to test.
import List from "../components/List"; // Import the component that you want to test.
import { fireEvent, screen } from "@testing-library/react"; // userEvent or fireEvent both can be used for click actions, for example.
import { renderWithProviders } from "../utils/utils-for-tests"; // Import the adjusted render method to test within a Redux environment.
import userEvent from "@testing-library/user-event"; // userEvent or fireEvent both can be used for click actions, for example.

describe("App.js component", () => {
  // A test that checks for the existence of an element with a specific alt text.
  test("renders logo in App component", () => {
    renderWithProviders(<App />);
    const image = screen.getByAltText("logo");
    expect(image).toBeInTheDocument();
  });

  // A test that checks for the existence of an element with a specific text content.
  test("renders List.js component in App.js", () => {
    renderWithProviders(<App />);
    const textInListJS = screen.getByText(/This is a list/i);
    expect(textInListJS).toBeInTheDocument();
  });
});

describe("List.js component", () => {
  // A test that checks if there is one element with a specific test id, basically testing if the listData state appears.
  test("renders the initial Redux state", () => {
    renderWithProviders(<List />);
    const list = screen.getAllByTestId("list-item");
    expect(list.length).toEqual(1);
  });

  // A test where it's checked if an element is added to the state after a specific button click.
  test("adds a new data entry to the Redux state after the button click", () => {
    renderWithProviders(<List />);
    let listItems = screen.getAllByTestId("list-item");
    const button = screen.getByRole("button", {
      name: /This button can add a new entry to the list/i,
    });

    expect(listItems.length).toEqual(1);
    userEvent.click(button);
    listItems = screen.getAllByTestId("list-item");
    expect(listItems.length).toEqual(2);
  });
});
