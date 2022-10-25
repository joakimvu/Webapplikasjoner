// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Response } from '../../../../types'
import prisma from '../../../../lib/db'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  switch (req.method?.toLowerCase()) {
    case 'get':
      let id =
        req.query.id instanceof Array
          ? req.query.id.find((i) => i.includes('id'))
          : req.query.id

      if (!id)
        return res.status(400).json({ status: false, error: 'Id is missing' })

      // TODO: Get poll by id
      let poll = await prisma.poll.findUnique({ where: { id } })
      if (!poll)
        return res.status(404).json({ status: false, error: 'Poll not found' })
      return res.status(200).json({ status: true, data: poll })
    case 'put':
      id = req.query.id as string
      poll = await prisma.poll.findUnique({ where: { id } })
      const updatedPoll = await prisma.poll.update({
        where: { id },
        data: { title: req.body.title },
      })
      return res.status(201).json({ status: true, data: {} })
    case 'delete':
      return res.status(204).json({ status: true, data: {} })
    default:
      return res.status(400).json({
        status: false,
        error: 'Method not allowed',
      })
  }
}
