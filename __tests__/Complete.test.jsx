import { render, screen, fireEvent } from "@testing-library/react";
import App from "../src/App";

test("toggles task completion", () => {
  render(<App />);

  const input = screen.getByPlaceholderText("Add a new task");
  const addButton = screen.getByText("Add Task");

  fireEvent.change(input, { target: { value: "Test task" } });
  fireEvent.click(addButton);

  const checkbox = screen.getByRole("checkbox");

  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();
});
