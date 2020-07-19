import React, { useState } from 'react'
import './List.css'

function List ({ title, items, onToggle, onAdd }) {
  const [newTodo, setNewTodo] = useState('')

  return (
    <>
      <div className="List">
        <div className="ListHeader">
          { title }
        </div>
        {
          items.map((item, index) => (
            <div
              key={item.id || item._id || index}
              className="ListItem"
            >
              <span>
                {
                  item.done ? <strike>{item.title}</strike> : item.title
                }
              </span>
              <input
                type="checkbox"
                checked={item.done}
                onChange={() => onToggle(item)}
              />
            </div>
          ))
        }
        <div className="AddMore">
          <input
            onChange={e => setNewTodo(e.target.value)}
            value={newTodo}
            placeholder="Add new todo"
          />
          <button
            onClick={() => {
              if (newTodo.length) {
                onAdd(newTodo)
                setNewTodo('')
              }
            }}
          >
            Add
          </button>
        </div>
      </div>
    </>
  )
}

export default List
