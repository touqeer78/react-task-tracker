import "./setup"; // loads env variables first
import express from "express";
import cors from "cors";
import supabase from "./supabase";

console.log("Supabase URL:", process.env.SUPABASE_URL);
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get("/tasks", async (req, res) => {
  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

app.post("/tasks", async (req, res) => {
  const { title } = req.body;
  const { data, error } = await supabase
    .from("tasks")
    .insert([{ title }])
    .select()
    .single();
  if (error) return res.status(500).json({ error: error.message });
  res.status(201).json(data);
});

app.put("/tasks/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const { completed } = req.body;
  const { error } = await supabase
    .from("tasks")
    .update({ completed })
    .eq("id", id);
  if (error) return res.status(500).json({ error: error.message });
  res.json({ message: "Updated" });
});

app.delete("/tasks/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const { error } = await supabase.from("tasks").delete().eq("id", id);
  if (error) return res.status(500).json({ error: error.message });
  res.json({ message: "Deleted" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
