import { useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function generateId() {
  return Date.now() + Math.random().toString(36).substr(2, 9)
}

function App() {
  const [tasks, setTasks] = useState([])
  const [editingTask, setEditingTask] = useState(null)

  const handleAddOrUpdateTask = (task) => {
    if (editingTask) {
      setTasks((prev) =>
        prev.map((t) => (t.id === editingTask.id ? { ...t, ...task } : t))
      )
      setEditingTask(null)
    } else {
      setTasks((prev) => [
        ...prev,
        { ...task, id: generateId(), status: 'Pending' },
      ])
    }
  }

  const handleEditTask = (task) => {
    setEditingTask(task)
  }

  const handleDeleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id))
    if (editingTask && editingTask.id === id) setEditingTask(null)
  }

  const handleStatusChange = (id, status) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status } : t))
    )
  }

  const handleCancelEdit = () => setEditingTask(null)

  return (
    <div className="app-container">
      <h1>Task Manager</h1>
      <TaskForm
        onSubmit={handleAddOrUpdateTask}
        editingTask={editingTask}
        onCancel={handleCancelEdit}
      />
      <TaskList
        tasks={tasks}
        onEdit={handleEditTask}
        onDelete={handleDeleteTask}
        onStatusChange={handleStatusChange}
      />
    </div>
  )
}

export default App
