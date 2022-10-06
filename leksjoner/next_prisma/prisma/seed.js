import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Dummydata
const users = [{ nickname: 'Test', email: 'test@test.no' }]

const createUsers = async () => {
  users.map(async (user) => {
    await prisma.user.create({
      data: {
        ...user,
      },
    })
  })
}

async function main() {
  console.log('Start seeding ...')
  // Kalle på seed funksjoner
  await createUsers()
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
