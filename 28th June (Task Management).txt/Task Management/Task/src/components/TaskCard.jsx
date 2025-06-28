import React, { useState } from 'react';

function TaskCard({ task, onDelete, onUpdate, onStatusChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState({ ...task });

  const handleSave = () => {
    onUpdate(editTask);
    setIsEditing(false);
  };

  return (
    <div style={styles.card}>
      {isEditing ? (
        <>
          <input
            value={editTask.title}
            onChange={(e) => setEditTask({ ...editTask, title: e.target.value })}
          />
          <textarea
            value={editTask.description}
            onChange={(e) => setEditTask({ ...editTask, description: e.target.value })}
          />
          <select
            value={editTask.priority}
            onChange={(e) => setEditTask({ ...editTask, priority: e.target.value })}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>🎯 Priority: {task.priority}</p>
          <p>📌 Status: {task.status}</p>

          <div style={styles.actions}>
            <button onClick={() => setIsEditing(true)}>✏️ Edit</button>
            <button onClick={() => onDelete(task.id)}>🗑️ Delete</button>
            <select
              value={task.status}
              onChange={(e) => onStatusChange(task.id, e.target.value)}
            >
              <option>Pending</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
          </div>
        </>
      )}
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '15px',
    backgroundColor: 'black',
  },
  actions: {
    display: 'flex',
    gap: '10px',
    marginTop: '10px',
  },
};

export default TaskCard;
