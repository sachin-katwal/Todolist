import React from 'react'

function Todoslist({item, onDelete}) {

 

  return (
    <div>
      <h3>{item}</h3>
      <span>
        <button onClick={() => onDelete(item)}>X</button>
      </span>
    </div>
    
  )
}

export default Todoslist