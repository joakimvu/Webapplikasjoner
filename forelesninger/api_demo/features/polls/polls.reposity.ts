export const exist = async ({ title }) => {
  try {
    const poll = await prisma.poll.findUnique({
      where: {
        id: title,
      },
    })
    return { status: true, data: poll }
  } catch (error) {
    return { status: false, error: { message: 'Failed finding poll' } }
  }
}

export const create = async ({ data }) => {
  try {
    // TODO Create
    const poll = await prisma.poll.create({ data })
    return { status: true, data: poll }
  } catch (error) {
    return { status: false, error: { message: 'Failed creating poll' } }
  }
}
