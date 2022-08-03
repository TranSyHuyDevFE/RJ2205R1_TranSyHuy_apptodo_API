import React from "react";

export default function TodoList({ todo }) {
  return (
    <div>
      {todo.map((todo) => (
        <ul className="list-group" key={todo.id}>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            {todo.title}
          </li>
        </ul>
      ))}
    </div>
  );
}
