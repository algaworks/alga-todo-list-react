import React, { useState } from 'react';
import './App.css';
import List from './components/List';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Wash my car', done: false },
    { id: 2, title: 'Buy some milk', done: true },
  ])

  const handleToggle = (selectedTodo) => {
    setTodos(todos.map(todo => {
      if (todo.id === selectedTodo.id) {
        return {
          ...todo,
          done: !selectedTodo.done
        }
      }
      return todo
    }))
  }

  const handleAdd = (newTodo) => {
    setTodos([...todos, {
      id: todos.length + 1,
      title: newTodo,
      done: false
    }])
  }

  return (
    <div className="App">
      <List
        items={todos}
        title="Todo list"
        onToggle={handleToggle}
        onAdd={handleAdd}
      />
    </div>
  );
}

export default App;
