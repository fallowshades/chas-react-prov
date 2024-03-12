// 2. API-Anrop och Rendering (3p)
// Använd fetch för att hämta posts från https://jsonplaceholder.typicode.com/posts.
// Visa endast titlarna för de första 5 inläggen.
// Varje titel ska vara en klickbar länk som, när man klickar på den,
// loggar postens ID till konsolen. Använd <button> för den klickbara länken.
import { useEffect, useState } from 'react'

function useFetchData(url) {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function getData() {
      const response = await fetch(url)
      const data = await response.json()
      setData(data.slice(0, 5))
      setIsLoading(false)
    }

    getData()
  }, [url])

  return { data, isLoading }
}

function App() {
  const { data, isLoading } = useFetchData(
    'https://jsonplaceholder.typicode.com/posts'
  )

  if (isLoading) return <div>Laddar...</div>
  console.log(data)
  return (
    <ul>
      {data.map((user) => {
        console.log(user)

        return (
          <li key={user.id}>
            {' '}
            <button type='btn' onClick={() => console.log(user.id)}>
              {user.title}{' '}
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default App
