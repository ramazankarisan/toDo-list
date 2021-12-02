import React, { createContext, useState } from 'react'
import List from './components/List'
import './App.css'


export const TodoContext = createContext();

function App() {
  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      text: 'first task',
      done: false
    }, {
      id: Math.random(),
      text: 'second task',
      done: false
    }, {
      id: Math.random(),
      text: 'third task',
      done: false
    },
  ])
  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      <div className="main">
        <List />
      </div>
    </TodoContext.Provider>

  )
}

export default App
