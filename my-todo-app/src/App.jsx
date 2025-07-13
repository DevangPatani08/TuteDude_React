import React, { useState } from 'react';
import './App.css'; // Import the CSS file

function App() {
  const [todos, setTodos] = useState([]); // State to store the list of todos
  const [inputValue, setInputValue] = useState(''); // State to store the current input field value

  // Function to handle adding a new todo
  const handleAddTodo = () => {
    if (inputValue.trim() === '') {
      // Show an alert if the input is empty
      alert('Please enter a To-Do task!');
    } else {
      // Add the new todo to the list
      setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
      // Clear the input field
      setInputValue('');
      // Show success message
      alert('To-Do added successfully!');
    }
  };

  // Function to handle toggling the completion status of a todo
  const handleToggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="todo-app">
      <h1>My To-Do List 📝</h1>

      <div className="input-section">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // Update inputValue as user types
          placeholder="Enter a new To-Do"
          className="todo-input"
        />
        <button onClick={handleAddTodo} className="add-button">Add To-Do</button>
      </div>

      <ul className="todo-list">
        {todos.length === 0 ? (
          <p className="no-todos">No tasks yet! Add some above. ⬆️</p>
        ) : (
          todos.map(todo => (
            <li key={todo.id} className={todo.completed ? 'todo-item completed' : 'todo-item'}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleComplete(todo.id)}
                className="todo-checkbox"
              />
              <span className="todo-text">{todo.text}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;