import * as userController from "../../../features/users/users.controller"

export default async function handler(req, res) {
  const {method } = req

  switch (method?.toLowerCase()) {
    case "post":
    // kaller på kontrolleren som brukes til å lage ny feed
    await userController.createUser(req, res)
    break
    // case "get":
    // // kaller på kontrolleren som brukes til å hente alle feeds
    // await userController.listFeeds(req, res)
    // break
    default:
    // git 405 Method Not Allowed hvis brukeren prøver på noe annet
    // enn GET eller POST
    res.status(405).end()
  }
}