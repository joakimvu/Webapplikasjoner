import { Counter } from "./Counter";
import { fireEvent, render, screen } from "@testing-library/react";

// it("should display the number passed as props", () => {
//   render(<Counter count={9} />);

//   const paragraph = document.querySelector("p");
//   expect(paragraph).toHaveTextContent("Count is: 9");
// });

// it("should start count at 0", () => {
//   render(<Counter />);

//   const paragraph = document.querySelector("p");
//   expect(paragraph).toHaveTextContent("Count is: 0");
// });

it("Counter should increment when + button is clicked", () => {
  render(<Counter />);

  expect(document.querySelector("p")).toHaveTextContent("Count is: 0");
  fireEvent.click(screen.getByText("+"));
  expect(document.querySelector("p")).toHaveTextContent("Count is: 1");
});

it("Counter should decrement when + button is clicked", () => {
  render(<Counter />);

  expect(document.querySelector("p")).toHaveTextContent("Count is: 0");
  fireEvent.click(screen.getByText("-"));
  expect(document.querySelector("p")).toHaveTextContent("Count is: -1");
});

it("Counter should just work", () => {
  render(<Counter />);

  expect(document.querySelector("p")).toHaveTextContent("Count is: 0");
  fireEvent.click(screen.getByText("+"));
  fireEvent.click(screen.getByText("+"));
  fireEvent.click(screen.getByText("+"));
  fireEvent.click(screen.getByText("-"));
  expect(document.querySelector("p")).toHaveTextContent("Count is: 2");
});
