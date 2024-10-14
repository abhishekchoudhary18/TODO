import { render, screen, fireEvent } from "@testing-library/react";
import App from "../src/App";

test("deletes a task", () => {
  render(<App />);

  const input = screen.getByPlaceholderText("Add a new task");
  const addButton = screen.getByText("Add Task");

  fireEvent.change(input, { target: { value: "Task to be deleted" } });
  fireEvent.click(addButton);

  const deleteButton = screen.getByText("Delete");
  console.log(deleteButton.length);
  fireEvent.click(deleteButton);

  expect(screen.queryByText("Task to be deleted")).not.toBeInTheDocument();
});
