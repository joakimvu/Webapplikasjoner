import { quizCheck } from "./index";
import { it, expect } from "vitest";

// Tests for quiz question 1
it("should return 'Right answer!' if answered correct on quiz", () => {
  expect(quizCheck("Pikachu", 0)).toBe("Right answer!");
});

it("should return 'Sorry, wrong answer! Try again next time' if answered wrong on quiz", () => {
  expect(quizCheck("Bulbasaur", 0)).toBe(
    "Sorry, wrong answer! Try again next time"
  );
});

it("should return 'Sorry, wrong answer! Try again next time' if answered wrong on quiz", () => {
  expect(quizCheck("asdawd", 0)).toBe(
    "Sorry, wrong answer! Try again next time"
  );
});
