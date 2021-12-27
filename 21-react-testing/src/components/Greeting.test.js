import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders 'Hello World!'", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // :)

    // Assert
    const textElement = screen.getByText("Hello World!");
    expect(textElement).toBeInTheDocument();
  });

  test("renders 'Yote' when the button was not clicked", () => {
    render(<Greeting />);
    const textElement = screen.getByText(/yote/i);
    expect(textElement).toBeInTheDocument();
  });

  test("renders 'Yeet' when the button was clicked", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const textElement = screen.getByText(/yeet/i);
    expect(textElement).toBeInTheDocument();
  });

  test("does not render 'Yote' after clicking the button", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const textElement = screen.queryByText(/yote/i);
    expect(textElement).not.toBeInTheDocument();
  });
});
