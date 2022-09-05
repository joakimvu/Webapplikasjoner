export const acceptUserObject = (user: UserType) => {
  const now = new Date()
  const thisYear = now.getFullYear()
  const age = thisYear - user.birthYear

  console.log(
    `User with name: ${user.name} born in ${user.birthYear} is ${age} years old`,
  )
}

type UserType = {
  name: string
  birthYear: number
}

interface IUser {
  name: string
  birthYear: number
}
