import React from "react";
import { Task } from "../types";

interface TaskItemProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => (
  <li>
    <label>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      {task.title}
    </label>
    <button onClick={() => onDelete(task.id)} style={{ marginLeft: "8px" }}>
      Delete
    </button>
  </li>
);

export default TaskItem;
