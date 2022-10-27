import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Dummydata
const users = [
  { nickname: 'Test', email: 'test@test.no' },
  { nickname: 'Test2', email: 'test2@test.no' },
]

const feeds = [
  { nickname: 'Feed 1', url: 'www.vg.no' },
  { nickname: 'Feed 2', url: 'www.hiof.no' },
]

const createUsers = async () => {
  users.map(async (user) => {
    await prisma.user.create({
      data: {
        ...user,
      },
    })
  })
}

const createFeeds = async () => {
  feeds.map(async (feed) => {
    await prisma.user.create({
      data: {
        ...feed,
      },
    })
  })
}

async function main() {
  console.log('Start seeding ...')
  await prisma.user.deleteMany({})
  await prisma.user.deleteMany({})
  // Kalle på seed funksjoner
  await createUsers()
  await createFeeds()
  console.log('Seeding finished.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
