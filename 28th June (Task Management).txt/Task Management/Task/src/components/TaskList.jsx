import React from 'react';
import TaskCard from './TaskCard';

function TaskList({ tasks, onDelete, onUpdate, onStatusChange }) {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks added yet.</p>
      ) : (
        tasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={onDelete}
            onUpdate={onUpdate}
            onStatusChange={onStatusChange}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;
