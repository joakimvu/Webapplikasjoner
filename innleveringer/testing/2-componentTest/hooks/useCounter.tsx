import { useState } from "react";

export const useCounter = (initialCount: number = 0) => {
  const [count, setCount] = useState(initialCount);

  // Adding count with 1
  const increment = (delta: number = 1) => {
    setCount(count + delta);
  };

  // Decreasing count with 1
  const decrement = (delta: number = 1) => {
    setCount(count - delta);
  };

  return { count, increment, decrement };
};
