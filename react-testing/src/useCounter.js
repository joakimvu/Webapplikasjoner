import { useState } from "react";

export const useCounter = (initialCount = 0) => {
  const [count, setCount] = useState(initialCount);

  const increment = (delta = 1) => setCount((count) => count + delta);
  const decrement = (delta = 1) => setCount((count) => count - delta);
  return {
    count,
    increment,
    decrement,
  };
};
