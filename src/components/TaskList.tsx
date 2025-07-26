import React from "react";
import { Task } from "../types";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle, onDelete }) => (
  <ul>
    {tasks.map((task) => (
      <TaskItem
        key={task.id}
        task={task}
        onToggle={onToggle}
        onDelete={onDelete}
      />
    ))}
  </ul>
);

export default TaskList;
