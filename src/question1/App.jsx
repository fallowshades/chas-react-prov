// 1. Lista med useState (3p)
// Skapa en komponent som visar en lista med hobbies.
// Användaren ska kunna lägga till en ny hobby via ett
// inputfält och en "Lägg till"-knapp. Varje hobby i listan
// ska ha en "Ta bort"-knapp som tar bort hobbyn från listan.
// Använd useState för att hantera listan.
import Lista from './Lista'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
function App() {
  let count = 0
  const [hobbies, setHobbies] = useState([])
  const [input, setInput] = useState('')

  function handleHobby(e) {
    setInput(e.target.value)
  }

  function handleAddHobby() {
    const hobby = {
      id: uuidv4(),
      text: input,
    }

    setHobbies([...hobbies, hobby])
  }

  function handleRemove(id) {
    const filteredComments = hobbies.filter((hobby) => hobby.id != id)
    setHobbies(filteredComments)
  }

  return (
    <div>
      <div>
        <input type='text' onChange={handleHobby} />
        <button onClick={handleAddHobby}>Add</button>
      </div>
      <Lista hobby={hobbies} handleRemove={handleRemove} />
    </div>
  )
}

export default App
