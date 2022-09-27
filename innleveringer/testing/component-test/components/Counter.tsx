import { useState } from "react";
import React from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const decrement = () => setCount((count) => count - 1);
  const increment = () => setCount((count) => count + 1);

  return (
    <div>
      <p>Count is: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};
