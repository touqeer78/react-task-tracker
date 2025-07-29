import React from "react";
import { Task } from "../types";

interface TaskItemProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => (
  <li className="task-item">
    <label>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span className={`task-title ${task.completed ? "completed" : ""}`}>
        {task.title}
      </span>
    </label>
    {task.due_date && (
      <div style={{ fontSize: "0.85rem", color: "#666" }}>
        Due: {new Date(task.due_date).toLocaleDateString()}
      </div>
    )}
    <button
      className="delete-button"
      onClick={() => onDelete(task.id)}
      style={{ marginLeft: "8px" }}
    >
      Delete
    </button>
  </li>
);

export default TaskItem;
