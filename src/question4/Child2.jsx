import { useTheme } from './ThemeContext'
const Child2 = () => {
  const { state } = useTheme()
  return (
    <div>
      <p>du är det {state.theme} mode</p>
    </div>
  )
}
export default Child2
