import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleAddTodo = () => {
    const trimmedValue = inputValue.trim();
    
    if (!trimmedValue) {
      setError('Task cannot be empty!');
      return;
    }
    
    setError('');
    setTodos([...todos, { 
      id: Date.now(), 
      text: trimmedValue, 
      completed: false 
    }]);
    setInputValue('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

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
          onChange={(e) => {
            setInputValue(e.target.value);
            if (error) setError('');
          }}
          onKeyPress={handleKeyPress}
          placeholder="Enter a new To-Do"
          className={`todo-input ${error ? 'error' : ''}`}
          required
        />
        <button onClick={handleAddTodo} className="add-button">
          Add To-Do
        </button>
      </div>
      
      {error && <p className="error-message">{error}</p>}

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