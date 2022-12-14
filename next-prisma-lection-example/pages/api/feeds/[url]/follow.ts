import * as feedFollowController from "../../../../features/feed-follow/feedFollow.controller"

export default async function handler(req, res) {
  const { method } = req

  switch (method?.toLowerCase()) {
    case "post":
      await feedFollowController.createFeedFollowing(req, res)
      break
    default:
      res.status(405).end()
  }
}