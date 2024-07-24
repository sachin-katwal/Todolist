import React from 'react'
import { useState } from 'react'
import Todoslist from './Todoslist';

function Todos() {

  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
   

      settodos([...todos,todo]);
      settodo("");
    
  }

  function handleDelete(itemToDelete) {
    settodos(todos.filter((item) => item !== itemToDelete))
  }

 

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={todo} onChange={(e) => settodo(e.target.value)} type="text" placeholder='Enter todo items...' />
        <button type='submit'>Add</button>
      </form>
      {todos.map((item) => <Todoslist key={item} item = {item} onDelete={handleDelete} />)}
      
    </div>
  )
}

export default Todos