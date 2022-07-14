import React from 'react'

export default function Todo({ todo, text, setTodos, todos }) {
  
  const deletTodoHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id))
  }

  const completeTodoHandler = () => {
    setTodos(todos.map((item) => {
      if(item.id === todo.id){
        return{
          ...item, completed: !item.completed
        }
      }
      return item
    }))
  }

  return (
    <div className='todo'>
      <li className={`todo-item ${todo.completed ? 'completed': ''}`}>{text}</li>
      <button onClick={completeTodoHandler} className='complete-btn'>
        <i className='fa fa-check'></i>
      </button>
      <button onClick={deletTodoHandler} className='trash-btn'>
        <i className='fa fa-trash'></i>
      </button>
    </div>
  )
}
