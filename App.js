import React, { useState, useEffect } from 'react';

function App() {
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);

  // Load from localStorage on first render
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem('myList'));
    if (savedList) {
      setList(savedList);
    }
  }, []);

  // Save to localStorage on list update
  useEffect(() => {
    localStorage.setItem('myList', JSON.stringify(list));
  }, [list]);

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (item.trim() !== '') {
      setList([...list, item]);
      setItem('');
    }
  };

  const handleDelete = (index) => {
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>📝 Persistent List with Delete</h1>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Enter item"
          value={item}
          onChange={handleChange}
        />
        <button type="submit" style={{ marginLeft: '10px' }}>Add</button>
      </form>

      <ul style={{ marginTop: '1rem' }}>
        {list.length === 0 && <p>No items yet.</p>}
        {list.map((value, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            ✅ {value}
            <button
              onClick={() => handleDelete(index)}
              style={{
                marginLeft: '15px',
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                padding: '5px 10px',
                cursor: 'pointer',
                borderRadius: '4px'
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
