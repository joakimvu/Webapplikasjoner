import { myFunction } from "../src";

it("should return 5 when called", () => {
  const result = myFunction();

  expect(result).toBe(5);
});

it("should return 6 if string is passed to function", () => {
  const result = myFunction("");

  expect(result).toBe(6);
});
