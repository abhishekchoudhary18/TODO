import { render, screen, fireEvent } from "@testing-library/react";
import App from "../src/App";

test("adds a new task", () => {
  render(<App />);

  const input = screen.getByPlaceholderText("Add a new task");
  const addButton = screen.getByText("Add Task");

  fireEvent.change(input, { target: { value: "My task" } });
  fireEvent.click(addButton);

  expect(screen.getByText("My task")).toBeInTheDocument();
});
