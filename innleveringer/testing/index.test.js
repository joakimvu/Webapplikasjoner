import { quizCheck } from "./index";
import { it, expect } from "vitest";

it("should return 'Right answer!' if answered correct on quiz", () => {
  expect(quizCheck("Pikachu")).toBe("Right answer!");
});

it("should return 'Sorry, wrong answer! Try again next time' if answered wrong on quiz", () => {
  expect(quizCheck("Bulbasaur")).toBe(
    "Sorry, wrong answer! Try again next time"
  );
});

it("should return 'Sorry, wrong answer! Try again next time' if answered wrong on quiz", () => {
  expect(quizCheck("Charmander")).toBe(
    "Sorry, wrong answer! Try again next time"
  );
});

it("should return 'Sorry, wrong answer! Try again next time' if answered wrong on quiz", () => {
  expect(quizCheck("Squirtle")).toBe(
    "Sorry, wrong answer! Try again next time"
  );
});
