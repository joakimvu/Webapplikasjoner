import * as pollService from "./polls.services"

export const createPoll = async (req, res) => {
  const { title } = req.body
  if (!title)
    return res.status(400).json({
      status: false,
      error: {
        message: 'Missing required fields',
      },
    })

  const createdPoll = await pollService.create({ title })
  if (createdPoll.status) {
    // TODO call loggerService
    // TODO return error to user
    return res.status(500).json({
      status: false,
      error: createdPoll.error,
    })
  }

  return res.status(201).json({
    status: true,
    data: createdPoll.data,
  })
  // TODO call emailService
}
