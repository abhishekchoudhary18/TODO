import { render, screen, fireEvent } from "@testing-library/react";
import App from "../src/App";

test("filters tasks", () => {
  render(<App />);

  const input = screen.getByPlaceholderText("Add a new task");
  const addButton = screen.getByText("Add Task");

  fireEvent.change(input, { target: { value: "Task 1" } });
  fireEvent.click(addButton);

  fireEvent.change(input, { target: { value: "Task 2" } });
  fireEvent.click(addButton);

  const firstCheckbox = screen.getAllByRole("checkbox")[0];
  fireEvent.click(firstCheckbox);

  fireEvent.click(screen.getByText("Completed"));
  expect(screen.getByText("Task 1")).toBeInTheDocument();
  expect(screen.queryByText("Task 2")).not.toBeInTheDocument();

  fireEvent.click(screen.getByText("Pending"));
  expect(screen.getByText("Task 2")).toBeInTheDocument();
  expect(screen.queryByText("Task 1")).not.toBeInTheDocument();

  fireEvent.click(screen.getByText("All"));
  expect(screen.getByText("Task 1")).toBeInTheDocument();
  expect(screen.getByText("Task 2")).toBeInTheDocument();
});
