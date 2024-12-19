import React from 'react';
import "../style.css"
function TodoList({ todos, removeTodo }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className="todo">
          <span>{todo.text}</span>
          <button className="close" onClick={() => removeTodo(todo.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;