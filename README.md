Here's a complete guide to create a **React application that dynamically adds items to a list** and **renders them using the `map()` function**.

---

## 🎯 Objective

* The user types an item (e.g., "Apples") into an input field.
* When submitted, the item is added to a list.
* The list is rendered dynamically using `map()`.

---

## 🛠️ Step-by-Step Setup

---

### 🌀 Step 1: Create a React App

```bash
npx create-react-app dynamic-list-app
cd dynamic-list-app
npm start
```

---

### ✏️ Step 2: Replace `App.js` with the Following Code

```jsx
import React, { useState } from 'react';

function App() {
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);

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

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>📝 Dynamic List</h1>
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
        {list.map((value, index) => (
          <li key={index}>✅ {value}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

---

### ✅ How It Works

* `useState` is used to track the current input (`item`) and the full list (`list`).
* On form submit:

  * The item is added to the list using `setList([...list, item])`.
  * `map()` is used to display each list item dynamically.
* The list updates instantly on every valid submission.

---

### 🧪 Sample Run

1. Type `Apples` → Click **Add** → List shows: ✅ Apples
2. Type `Bananas` → Click **Add** → List updates to:

   * ✅ Apples
   * ✅ Bananas

---

Would you like to add a delete button next to each item or make the list persist using localStorage?
