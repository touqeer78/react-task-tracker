import React, { useState } from "react";
import { Task } from "./types";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (title: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  const handleToggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h1>Task Tracker</h1>
      <AddTaskForm onAdd={handleAddTask} />
      <TaskList
        tasks={tasks}
        onToggle={handleToggleTask}
        onDelete={handleDeleteTask}
      />
    </div>
  );
};

export default App;
