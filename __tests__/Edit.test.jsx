import { render, screen, fireEvent } from "@testing-library/react";
import App from "../src/App";

test("edits a task", () => {
  render(<App />);

  const input = screen.getByPlaceholderText("Add a new task");
  const addButton = screen.getByText("Add Task");

  fireEvent.change(input, { target: { value: "Original Task" } });
  fireEvent.click(addButton);

  const editButton = screen.getByText("Edit");
  fireEvent.click(editButton);

  const editInput = screen.getByDisplayValue("Original Task");
  fireEvent.change(editInput, { target: { value: "Updated Task" } });

  const saveButton = screen.getByText("Save");
  fireEvent.click(saveButton);

  expect(screen.getByText("Updated Task")).toBeInTheDocument();
});
