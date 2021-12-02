import React from 'react'

const Todo = ({ handleEdit, item, handleDelete, handleToggleDone }) => {
  return (
    <li style={{ textDecoration: item.done && 'line-through' }}>
      {item.text}
      <button onClick={() => handleDelete(item.id)}>X</button>
      <button onClick={() => handleToggleDone(item.id)}>😃</button>
      <button onClick={() => handleEdit(item.id)}>..</button>

    </li>
  )
}

export default Todo
