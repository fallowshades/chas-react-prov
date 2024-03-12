// 3. Custom Hook för counter (3p)
// Skapa en custom hook, useCounter, som hanterar en räknare.
// Denna hook ska tillhandahålla två funktioner: en för att öka
// räknarens värde och en för att minska den. Skriv kod i App-komponenten
// nedanför som använder din custom hook och visar räknarens värde
// samt två knappar för att öka och minska värdet.
import { useCounter } from './useCounter'
function App() {
  const quantity = useCounter(0)
  return (
    <div>
      <p>{quantity.value}</p>
      <button type='button' onClick={quantity.increment}>
        +
      </button>
      <button type='button' onClick={quantity.decrement}>
        -
      </button>
    </div>
  )
}

export default App
