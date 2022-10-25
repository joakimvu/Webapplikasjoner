import * as pollRepo from './polls.repository'

export const create = async ({ title }) => {
  const poll = await pollRepo.exist({ title })
  if (!poll.stats) return { status: false, error: poll.error }

  if (poll.data) {
    return { status: false, error: { message: 'Poll already exist' } }
  }

  const createdPoll = await pollRepo.create({ title })

  if (!createdPoll.status) return { status: false, error: createdPoll.error }
  return { status: true, data: createdPoll.data }
}
