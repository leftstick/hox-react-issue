import useUserModel from './models/useUserModel'

export default () => {
  const { users } = useUserModel(model => [model.users])

  return (
    <div>
      {users.map(u => {
        return <p key={u.name}>{u.name}</p>
      })}
    </div>
  )
}
