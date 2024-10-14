import { useState } from "react";
import TaskInput from "./Components/TaskInput";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
      isEditing: false,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <TaskInput onAddTask={addTask} />
      {tasks.map((task) => JSON.stringify(task))}
    </>
  );
}

export default App;
