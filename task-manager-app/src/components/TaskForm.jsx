import React, { useState, useEffect } from 'react';

const initialFormState = {
  title: '',
  description: '',
  priority: 'Low',
};

export default function TaskForm({ onSubmit, editingTask, onCancel }) {
  const [form, setForm] = useState(initialFormState);

  useEffect(() => {
    if (editingTask) {
      setForm(editingTask);
    } else {
      setForm(initialFormState);
    }
  }, [editingTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    onSubmit(form);
    setForm(initialFormState);
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Task Title *"
        value={form.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
      />
      <select name="priority" value={form.priority} onChange={handleChange}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button type="submit">{editingTask ? 'Update' : 'Add'} Task</button>
      {editingTask && <button type="button" onClick={onCancel}>Cancel</button>}
    </form>
  );
} 