import { rest } from 'msw'
import { setupServer } from 'msw/node'

describe('fetchUser tests', () => {
  // vi oppretter en server, denne kan også plasseres 
  // i en egen fil slik at den kan gjenbrukes

  // man kan også registrere endepunkt når man oppretter servern
  // slik at man har standard funksjonalitet felles
  const server = setupServer()

  beforeAll(() => {
    // her starter vi serveren
    server.listen()
    // her mocker vi også Date objektet, for hvis ikke vi hadde 
    // gjort det ville testen feilet til neste år da personen 
    // vil ha en ny alder.
    jest.useFakeTimers('modern')
    jest.setSystemTime(new Date(2021, 1, 1))
  })
  // her fjerner vi eventuelle ekstra endepunkter(handlers) 
  // som kan ha blitt registert iløpet av en test slik at 
  // de ikke påvirker andre tester
  afterEach(() => server.resetHandlers())
  // når alle testene er ferdige stopper vi serveren og 
  // setter Date objektet tilbake til standard funksjonalitet
  afterAll(() => {
    server.close()
    jest.useRealTimers()
  })

  it('should return list of users with calculated age', async () => {
    const fakeUser = {
      name: 'Joe Johnson',
      bornYear: 1969
    }
    server.use(
      // her hånderer vi en GET request til http://some_api.com/users
      rest.get('http://some_api.com/users', (req, res, ctx) => {
        // også returnerer vi en array av den brukeren vi laget over
        return res(ctx.json([fakeUser]))
      }),
    )

    const users = await fetchUsers()

    // her sjekker vi at users arrayen bare har 1 bruker
    expect(users).toHaveLength(1)
    // her sjekker vi at det finnes en bruker med samme 
    // navn og fødselsår som fakeUser, og at alderen er kalkulert
    expect(users).toContainEqual({
      ...fakeUser,
      age: 52
    })
  })

  it('should throw error if api returns non OK status', async () => {
    server.use(
      rest.get('http://some_api.com/users', (req, res, ctx) => {
        // her har vi en annen implementasjon hvor vi sier 
        // at apiet skal returnere en 401 status kode
        return res(ctx.status(401))
      }),
    )
    // her sjekket vi at promiset blir "rejected" og at 
    // det da bli kastet en error med en melding
    await expect(fetchUsers()).rejects.toThrow('Error connecting to api')
  })
})