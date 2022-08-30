import { myFunction } from "../src";
import { randomPromiseFunction } from "../src/randomPromiseFunction";

it.skip("should return 5 when called", () => {
  const result = myFunction();

  expect(result).toBe(5);
});

it.skip("should return 6 if string is passed to function", () => {
  const result = myFunction("");

  expect(result).toBe(6);
});

it("should validate promise value", async () => {
  // funksjonen returnerer et promise med verdien 1
  const promise = randomPromiseFunction();
  // expect(promise).toBe(1)
  // mulighet 1:
  const verdi = await promise;
  expect(verdi).toBe(1);
  // mulighet 2:
  await expect(promise).resolves.toBe(1);
});
