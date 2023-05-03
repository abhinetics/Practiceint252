import { useState } from 'react';

function AddItemForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [items, setItems] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = { name, description };
    setItems([...items, newItem]);
    setName('');
    setDescription('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <button type="submit">Add Item</button>
      </form>

      <h2>Current Items:</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <strong>{item.name}</strong>: {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddItemForm;
