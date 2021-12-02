import React, { useContext, useRef } from 'react'
import { TodoContext } from '../App';
import Todo from './Todo';


const List = () => {
  const { todos, setTodos } = useContext(TodoContext)

  const input = useRef()

  const handleDelete = (id) => {
    setTodos(todos.filter((item) => {
      return item.id !== id
    }))
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
    const targetItem = todos.find(item => item.id === id);
    input.current.value = targetItem.text

    handleDelete(id);
  }
  return (
    <>
      <input type="text" ref={input} />
      <button onClick={() => handleAdd(input.current.value)}>+</button>
      <div className="App">
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
