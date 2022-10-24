// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
// TODO: NOE MER HER... import prisma from '../../../'
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

// POLLS
// localhost:3000/api/polls/{id}/publish ["PUT"]
// localhost:3000/api/polls/{id}/questions ["GET", "PUT", "DELETE"]
// localhost:3000/api/polls/{id}/ ["GET", "PUT", "DELETE"]
// localhost:3000/api/polls/ ["GET", "POST"]

// QUESTIONS
// localhost:3000/api/questions/{id}/questions ["GET", "PUT", "DELETE"]
// req.body => pollsId

// VOTES
// localhost:3000/api/votes ["GET", "POST"]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  switch (req.method?.toLowerCase()) {
    case 'get':
      const polls = await prisma.poll.findMany({ include: { questions: true } })
      return res.status(200).json({ status: true, data: {} })
    case 'post':
      const data = req.body
      // TODO: Validata data
      // Requirements: example, title length 5
      if (!data.title)
        return res
          .status(400)
          .json({ status: false, erroe: 'Title is required' })

      // TODO: Save in Database
      const poll = await prisma.poll.create({ data })
      // TODO: Return newly created poll
      return res.status(201).json({ status: true, data: {} })
    default:
      return res.status(400).json({
        success: false,
        error: 'Method not allowed',
      })
  }
}
