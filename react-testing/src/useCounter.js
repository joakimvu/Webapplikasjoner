import { useState } from "react";
const isNumberOrDefault = (value, defaultValue) =>
  typeof value === "number" ? value : defaultValue;

export const useCounter = (initialCount = 0) => {
  const [count, setCount] = useState(initialCount);

  const increment = (delta = 1) =>
    setCount((count) => count + isNumberOrDefault(delta, 1));
  const decrement = (delta = 1) =>
    setCount((count) => count - isNumberOrDefault(delta, 1));
  return {
    count,
    increment,
    decrement,
  };
};
