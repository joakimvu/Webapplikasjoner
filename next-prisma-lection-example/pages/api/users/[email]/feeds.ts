import * as userController from '../../../../features/users/users.controller'

export default async function handler(req, res) {
  const { method } = req

  switch (method?.toLowerCase()) {
    case 'get':
      await userController.listUserFeeds(req, res)
      break
    default:
      res.status(405).end()
  }
}