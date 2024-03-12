import { useContext, createContext, useReducer, useEffect } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'
import ChildToggle from './ChildToggle'

const AllThemeContext = createContext()

const initialState = {
  theme: 'light',
}

function themeReducer(state, action) {
  // your code here
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: action.theme,
      }

    default:
      return state
  }
}

const ThemeContext = () => {
  const [state, dispatch] = useReducer(themeReducer, initialState)

  useEffect(() => {
    document.documentElement.classList.remove(
      ...document.documentElement.classList
    )
    if (state.theme === 'dark') {
      document.documentElement.classList.add('dark')
    }
    if (state.theme === 'light') {
      document.documentElement.classList.add('light')
    }
  }, [state.theme])

  const setTheme = (theme) => {
    // your code here
    switch (theme) {
      case 'light':
        dispatch({
          type: 'TOGGLE_THEME',
          theme: 'light',
        })
        console.log(state.theme, 'theme')
        break
      case 'dark':
        dispatch({
          type: 'TOGGLE_THEME',
          theme: 'dark',
        })
        console.log(state.theme, 'theme')

        break
    }
  }

  return (
    <AllThemeContext.Provider value={{ setTheme, state }}>
      <Child1 />
      <Child2 />
      <ChildToggle />
    </AllThemeContext.Provider>
  )
}
export default ThemeContext

export const useTheme = () => useContext(AllThemeContext)
