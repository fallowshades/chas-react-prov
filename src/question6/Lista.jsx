import { useSelector } from 'react-redux'
const Lista = () => {
  const users = useSelector((state) => state.users.list)

  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <p>{user.userObject}</p>
          </div>
        )
      })}
    </div>
  )
}
export default Lista
