import { useState, useRef, useEffect } from "react";

export default function TaskTemplate({ task, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);
  const inputRef = useRef(null);
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleSave = () => {
    if (editedText.trim()) {
      onEdit(task.id, editedText);
      setIsEditing(false);
    }
  };

  useEffect(() => {
    setIsEditing(false);
    setEditedText(task.text);
  }, [task.id]);

  return (
    <li className="flex justify-between items-center bg-gray-700 p-4 rounded-lg shadow">
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="h-4 w-4 text-blue-600 focus:ring-0"
        />
        {isEditing ? (
          <input
            ref={inputRef}
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="bg-gray-600 text-white rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ) : (
          <span
            className={`${
              task.completed ? "line-through text-gray-400" : "text-white"
            }`}
          >
            {task.text}
          </span>
        )}
      </div>
      <div className="space-x-2">
        <button
          onClick={() => onDelete(task.id)}
          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-500"
        >
          Delete
        </button>
        <button
          onClick={isEditing ? handleSave : () => setIsEditing(true)}
          className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-400"
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
    </li>
  );
}
