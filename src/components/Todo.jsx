import React from 'react'

const Todo = ({ handleEdit, item, handleDelete, handleToggleDone }) => {
  const styles = {
    textDecoration: 'line-through',
    textDecorationColor: 'red'
  }

  return (
    <li>
      <p style={item.done ? styles : {}}>
        {item.text}
      </p>
      <div className="smallButtonsDiv">
        <button onClick={() => handleDelete(item.id)}>X</button>
        <button onClick={() => handleToggleDone(item.id)}>😃</button>
        <button onClick={() => handleEdit(item.id)}>...</button>
      </div>
    </li>

  )
}

export default Todo
