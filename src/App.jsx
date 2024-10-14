import { useEffect, useState } from "react";
import TaskInput from "./Components/TaskInput";
import TasksList from "./Components/TasksList";
import Filters from "./Components/Filters";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
      isEditing: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const editTask = (taskId, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? { ...task, text: newText, isEditing: !task.isEditing }
          : task
      )
    );
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-5">
      <div className="w-full max-w-4xl bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-white mb-5 text-center">
          Task Manager
        </h1>
        <TaskInput onAddTask={addTask} />
        <Filters filter={filter} setFilter={setFilter} />
        <TasksList
          tasks={filteredTasks}
          onDelete={deleteTask}
          onEdit={editTask}
          onToggle={toggleTaskCompletion}
        />
      </div>
    </div>
  );
}

export default App;
