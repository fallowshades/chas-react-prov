import { useTheme } from './ThemeContext'
import { useState } from 'react'
const ChildToggle = () => {
  const { setTheme } = useTheme()
  const [isDefaultTheme, setIsDefaultTheme] = useState(true)
  return (
    <button
      type='button'
      onClick={() => {
        isDefaultTheme ? setTheme('dark') : setTheme('light')
        setIsDefaultTheme(!isDefaultTheme)
      }}
    >
      toggle
    </button>
  )
}
export default ChildToggle
