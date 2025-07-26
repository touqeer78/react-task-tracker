import React, { useState } from "react";

interface AddTaskFormProps {
  onAdd: (title: string) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title);
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add new task"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTaskForm;
