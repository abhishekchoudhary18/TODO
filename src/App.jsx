import TaskInput from "./Components/TaskInput";

function App() {
  const onAddTask = (task) => {
    console.log(task);
  };
  return (
    <>
      <TaskInput onAddTask={onAddTask} />
    </>
  );
}

export default App;
