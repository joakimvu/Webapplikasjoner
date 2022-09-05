import { fetchUser, myFunction } from "../src";
import { randomPromiseFunction } from "../src/randomPromiseFunction";
import { userService } from "../src/userService"

it.skip("should return 5 when called", () => {
  const result = myFunction();

  expect(result).toBe(5);
});

it.skip("should return 6 if string is passed to function", () => {
  const result = myFunction("");

  expect(result).toBe(6);
});

it.skip("should validate promise value", async () => {
  // funksjonen returnerer et promise med verdien 1
  const promise = randomPromiseFunction();
  // expect(promise).toBe(1)
  // mulighet 1:
  const verdi = await promise;
  expect(verdi).toBe(1);
  // mulighet 2:
  // await expect(promise).resolves.toBe(1);
});
class FakeUserService {
  async getUser() {
      return {
          id: 1,
          username: "andreas "
      }
  }
}

it.skip("should fetch user from db", async () => {
  const userservice = new userService()
  const spy = jest.spyOn(userservice, "getUser")
  spy.mockResolvedValue({
    id: 1,
    username: "andreas"
  })
  const user = await fetchUser(userservice)

  expect(user.id).toBe(1)
  expect(spy).toHaveBeenCalledTimes(1)
})


it("should fetch user from db", async () => {
  const mockUserProvider = jest.fn()
  mockUserProvider.mockRejectedValue(Error("error"))
  mockUserProvider.mockResolvedValueOnce( {
    id: 1,
    username: "andreas"
  })
  const user = await fetchUser(mockUserProvider)
  expect(mockUserProvider).toHaveBeenCalledTimes(1)
  expect(user.id).toBe(1)

  await expect(mockUserProvider()).rejects.toThrow()
})