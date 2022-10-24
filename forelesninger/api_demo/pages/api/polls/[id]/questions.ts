// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  switch (req.method?.toLowerCase()) {
    case 'get':
      // TODO: Get poll by id
      // TODO: Return poll with questions
      return res.status(200).json({})
    case 'post':
      // TODO: Get poll by id
      // TODO: Add question to poll
      // TODO: Return poll with added questions
      return res.status(201).json({})
    case 'put':
      // TODO: Get poll by id
      // TODO: Updates question to poll
      // TODO: Return poll with added questions
      return res.status(204).json({})
    case 'delete':
      // TODO: Get poll by id
      // TODO: Delete question to poll
      // TODO: Return poll with deleted questions
      return res.status(204).json({})
    default:
      return res.status(400).json({
        success: false,
        error: 'Method not allowed',
      })
  }
}
