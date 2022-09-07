async function fetchUsers() {
  const response = await fetch('http://some_api.com/users')
  if (!response.ok) throw new Error('Error connecting to api')
  const users = await response.json()
  const thisYear = (new Date()).getFullYear()
  return users.map(user => {
    const newUser = {
      ...user,
      age: thisYear - user.bornYear
    }
  })
}