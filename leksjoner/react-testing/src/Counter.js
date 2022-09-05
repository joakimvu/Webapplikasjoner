import { useState } from "react";
import { useCounter } from "./useCounter.js";

export const Counter = () => {
  // const [count, setCount] = useState(0);

  // const decrement = () => setCount((count) => count - 1);
  // const increment = () => setCount((count) => count + 1);

  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <p>Count is: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};
