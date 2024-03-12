import { useDispatch } from 'react-redux'
import { useState, useEffect, useRef } from 'react'
import { addUser } from './usersSlice'
import { v4 as uuidv4 } from 'uuid'
const Input = () => {
  const dispatch = useDispatch()
  const ref = useRef()
  const [input, setInput] = useState('')
  useEffect(() => console.log(input), [input])

  function handleAddUser() {
    dispatch(
      addUser({
        id: uuidv4(),
        userObject: input,
      })
    )
  }
  const OnChangeHandler = () => {
    var newInput = ref.current.value
    setInput(newInput)
    // console.log(value)

    return null
  }

  return (
    <div>
      <p>write input</p>
      <input ref={ref} value={input} onChange={OnChangeHandler} />
      <button type='button' onClick={() => handleAddUser()}>
        lägg till
      </button>
    </div>
  )
}
export default Input
