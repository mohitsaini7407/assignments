import React from 'react';

export default function TaskList({ tasks, onEdit, onDelete, onStatusChange }) {
  return (
    <table className="task-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Priority</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.length === 0 ? (
          <tr>
            <td colSpan="5" style={{ textAlign: 'center' }}>No tasks found.</td>
          </tr>
        ) : (
          tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.priority}</td>
              <td>
                <select
                  value={task.status}
                  onChange={(e) => onStatusChange(task.id, e.target.value)}
                >
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </td>
              <td>
                <button onClick={() => onEdit(task)}>Edit</button>
                <button onClick={() => onDelete(task.id)}>Delete</button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
} 