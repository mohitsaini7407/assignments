import React, { useState } from 'react';

function PackingList() {
  const [items, setItems] = useState([
    { id: 1, name: 'Toothbrush', isPacked: false },
  ]);
  const [newItem, setNewItem] = useState('');

  // Add new item
  const handleAdd = () => {
    if (newItem.trim() === '') return;
    const newItemObj = {
      id: Date.now(),
      name: newItem.trim(),
      isPacked: false,
    };
    setItems([...items, newItemObj]);
    setNewItem('');
  };

  // Toggle packed status
  const togglePacked = (id) => {
    const updated = items.map(item =>
      item.id === id ? { ...item, isPacked: !item.isPacked } : item
    );
    setItems(updated);
  };

  // Delete item
  const deleteItem = (id) => {
    const updated = items.filter(item => item.id !== id);
    setItems(updated);
  };

  return (
    <div style={styles.container}>
      <div style={styles.inputGroup}>
        <input
          type="text"
          placeholder="Add an item..."
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleAdd} style={styles.button}>Add</button>
      </div>

      <ul style={styles.list}>
        {items.map(item => (
          <li key={item.id} style={styles.listItem}>
            <span
              onClick={() => togglePacked(item.id)}
              style={{
                textDecoration: item.isPacked ? 'item' : 'none',
                cursor: 'pointer',
                color: item.isPacked ? 'green' : 'white',
              }}
            >
              {item.isPacked ? '✔️ ~' + item.name + '~' : '☐ ' + item.name}
            </span>
            <button onClick={() => deleteItem(item.id)} style={styles.deleteButton}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: 'auto',
  },
  inputGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '20px',
  },
  input: {
    padding: '8px',
    fontSize: '16px',
    flex: 1,
  },
  button: {
    padding: '8px 16px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
    fontSize: '18px',
  },
  deleteButton: {
    marginLeft: '10px',
    background: 'none',
    border: 'none',
    color: 'red',
    fontSize: '18px',
    cursor: 'pointer',
  },
};

export default PackingList;
