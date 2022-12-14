import prisma from '../../lib/db'

export const create = async ({ userId, feedId }) => {
  try {
    const feedFollow = await prisma.feedFollow.create({
      data: {
        user: {
          connect: { id: userId },
        },
        feed: {
          connect: { id: feedId },
        },
      },
    })

    return { success: true, data: feedFollow}
  } catch ( error ) {
    return { success: false, error: "Failed following"}
  }
}

// bruker userId_feedId som er en composite key
export const exist = async ({ userId, feedId }) => {
  try {
    const feedFollowing = await prisma.feedFollow.findUnique({
      where: {
        userId_feedId: {
          userId,
          feedId
        }
      }
    })
    return { success: true, data: feedFollowing}

  } catch (error) {
    console.log(error)
    return { success: false, error: "Failed finding following"}
  }
}

export const findMany = async ({ feedId }) => {
  try {
    const feedFollowers = await prisma.feedFollow.findMany({
      where: {
        feedId,
      }
    })
    return { success: true, data: feedFollowers}
  } catch (error) {
    return {success: false, error: "Failed finding followers"}
  }
}

export const findManyExtended = async ({ feedId }) => {
  try {
    const feedFollowers = await prisma.feedFollow.findMany({
      where: {
        feedId,
      },
      include: {
        user: true,
        feed: true,
      }
    })
    return { success: true, data: feedFollowers}
  } catch (error) {
    return { success: false, data: "Failed finding followers"}
  }
}