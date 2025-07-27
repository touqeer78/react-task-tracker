import express from "express";
import cors from "cors";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

let tasks: { id: number; title: string; completed: boolean }[] = [];

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  const { title } = req.body;
  const newTask = {
    id: Date.now(),
    title,
    completed: false,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.put("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { completed } = req.body;
  tasks = tasks.map((task) => (task.id === id ? { ...task, completed } : task));
  res.json({ message: "Updated" });
});

app.delete("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  tasks = tasks.filter((task) => task.id !== id);
  res.json({ message: "Deleted" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
