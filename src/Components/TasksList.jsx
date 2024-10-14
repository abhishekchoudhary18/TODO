import TaskTemplate from "./TaskTemplate";

export default function TasksList({ tasks, onDelete, onToggle, onEdit }) {
  return (
    <ul className="space-y-4">
      {tasks.map((task) => (
        <TaskTemplate
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}
