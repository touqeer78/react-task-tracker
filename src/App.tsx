import React, { useState, useEffect } from "react";
import { Task } from "./types";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";
import "./App.css"; // Assuming you have some styles in App.css
import API from "./api";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Fetch tasks on load
  useEffect(() => {
    API.get("/tasks")
      .then((res) => setTasks(res.data))
      .catch((err) => console.error("Error fetching tasks", err));
  }, []);

  const handleAddTask = (title: string) => {
    API.post("/tasks", { title }).then((res) => {
      setTasks([res.data, ...tasks]);
    });
  };

  const handleToggleTask = (id: number) => {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;

    API.put(`/tasks/${id}`, { completed: !task.completed }).then(() => {
      setTasks(
        tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
      );
    });
  };

  const handleDeleteTask = (id: number) => {
    API.delete(`/tasks/${id}`).then(() => {
      setTasks(tasks.filter((t) => t.id !== id));
    });
  };

  return (
    <div className="task-app">
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
