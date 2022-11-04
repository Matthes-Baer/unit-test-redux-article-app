import App from "../App";
import List from "../components/List";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../utils/utils-for-tests";

import userEvent from "@testing-library/user-event";

describe("App.js component", () => {
  test("renders logo in App component", () => {
    renderWithProviders(<App />);
    const image = screen.getByAltText("logo");
    expect(image).toBeInTheDocument();
  });

  test("renderWithProviderss List.js component in App.js", () => {
    renderWithProviders(<App />);
    const textInListJS = screen.getByText(/This is a list/i);
    expect(textInListJS).toBeInTheDocument();
  });
});

describe("List.js component", () => {
  test("renderWithProviderss initial state of listData state", () => {
    renderWithProviders(<List />);
    const list = screen.getAllByTestId("list-item");
    expect(list.length).toEqual(1);
  });

  // test("adds a new data entry to listData after button click", () => {
  //   renderWithProviders(<List />);
  //   let listItems = screen.getAllByTestId("list-item");
  //   const button = screen.getByRole("button", {
  //     name: /This button can add a new entry to the list/i,
  //   });

  //   expect(listItems.length).toEqual(1);
  //   userEvent.click(button);
  //   listItems = screen.getAllByTestId("list-item");
  //   expect(listItems.length).toEqual(2);
  // });
});
