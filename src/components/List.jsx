import React, { useContext, useRef, useState } from 'react'
import { TodoContext } from '../App';
import Todo from './Todo';


const List = () => {

  const [deletedObj, setDeletedObj] = useState({})
  const { todos, setTodos } = useContext(TodoContext)

  const input = useRef()

  const handleDelete = (id) => {
    setTodos([...todos.filter((item) => {
      return item.id !== id
    })])

    // to save the last deleted task as a variable, so we can manage to take it back with the button
    todos.filter(item => item.id == id).forEach(item => {
      setDeletedObj({ id: id, text: item.text, done: item.done })
    })
    
  }
  const handleTakeBack = () => {
    if (todos.find(item => item.id == deletedObj.id)) {
      return
    } else {
      setTodos([...todos, deletedObj])
    }
  }
  const handleToggleDone = (id) => {
    let newToDoArr = []
    todos.forEach(item => {
      if (item.id !== id) {
        newToDoArr.push(item)
      } else {
        item.done = !item.done
        newToDoArr.push(item)
      }
    })
    setTodos(newToDoArr)
  }

  const handleAdd = (value) => {
    setTodos([...todos, { id: Math.random(), text: value, done: false }]);
    input.current.value = ""
  }
  const handleEdit = (id) => {
    if (input.current.value === '') {

      const targetItem = todos.find(item => item.id === id);
      input.current.value = targetItem.text

      handleDelete(id);
    } else { return }

  }
  return (
    <>
      <div className="inputDiv">
        <input type="text" ref={input} />
        <button onClick={() => handleAdd(input.current.value)}>+</button>
        <button onClick={() => handleTakeBack()}>🔙</button>
      </div>
      <div className="listDiv">
        <ol>
          {todos.map(item => {
            return <Todo handleEdit={handleEdit} key={item.id} item={item} handleToggleDone={handleToggleDone} handleDelete={handleDelete} />
          })}
        </ol>

      </div>
    </>
  )
}

export default List
