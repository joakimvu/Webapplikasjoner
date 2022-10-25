export const createPoll = async (req, res) => {
  const { title } = req.body
  if (!title)
    return res.status(400).json({
      status: false,
      error: {
        message: 'Missing required fields',
      },
    })

  const createPoll = await pollService.create({ title })
  if (createPoll.status) {
    // TODO call loggerService
    // TODO return error to user
    return res.status(500).json({
      status: false,
      error: createPoll.error,
    })
  }

  // TODO MANGLER NOE RETURN HER
  return res.status(201).json({})
  // TODO call emailService
}
