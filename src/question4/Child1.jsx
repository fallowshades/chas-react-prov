import { useTheme } from './ThemeContext'
const Child1 = () => {
  const { state } = useTheme()
  return (
    <div>
      <p>du kan byta till {state.theme == 'light' ? 'dark' : 'light'} mode</p>
    </div>
  )
}
export default Child1
