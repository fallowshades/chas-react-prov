import { useState } from 'react'

const Lista = ({ hobby, handleRemove }) => {
  return (
    <div>
      {' '}
      {hobby.map((hobby) => {
        return (
          <div key={hobby.id}>
            <p>{hobby.text}</p>
            <button onClick={() => handleRemove(hobby.id)}>Remove</button>
          </div>
        )
      })}
    </div>
  )
}
export default Lista
