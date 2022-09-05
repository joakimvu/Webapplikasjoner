export enum Role {
  Principal = 'Principal',
  Professor = 'Professor',
  Lecturer = 'Lecturer',
  StudentAssistant = 'StudentAssistant',
  Student = 'Student',
  GuestLecturer = 'GuestLecturer',
}

const createUser = (name: string, role: Role) => {
  console.log(`User(name: ${name}, role: ${role})`)
}

createUser('Andreas', 'SuperUser')

type RoleUnion =
  | 'Principal'
  | 'Professor'
  | 'Lecturer'
  | 'StudentAssistant'
  | 'Student'
  | 'GuestLecturer'

const role: RoleUnion = 'SuperUser'

const createUserUnion = (name: string, role: RoleUnion) => {
  console.log(`UserUnion(name: ${name}, role: ${role})`)
}
