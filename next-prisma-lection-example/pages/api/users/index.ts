import * as userController from "../../../features/users/users.controller"

export default async function handler(req, res) {
  const { method } = req

switch (method?.toLowerCase()) {
  case 'post':
    // kaller på kontrolleren som brukes til å lage ny bruker
    await userController.createUser(req, res)
    break
    // case 'get':
    //   // kaller på kontrolleren som brukes til å hente alle brukere
    //   await userController.listAllUsers(req, res)
    //   break
    default:
      // gir 405 Method Not Allowed hvis brukeren prøver på noe annet 
      // enn POST
      res.status(405).end()
  }
}