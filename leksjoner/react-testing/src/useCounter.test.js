import { useCounter } from "./useCounter";
import { renderHook, act } from "@testing-library/react-hooks";

it("should use provided initial value for count", () => {
  const { result } = renderHook(() => useCounter(5));

  expect(result.current.count).toBe(5);
});

it("should use 0 as default starting count", () => {
  const { result } = renderHook(() => useCounter());

  expect(result.current.count).toBe(0);
});

it("should have increment function", () => {
  const { result } = renderHook(() => useCounter());

  expect(typeof result.current.increment).toBe("function");
});

it("should increment count when increment is called", () => {
  const { result } = renderHook(() => useCounter());

  expect(result.current.count).toBe(0);

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});

it("should increment count by number passed to increment function", () => {
  const { result } = renderHook(() => useCounter());

  expect(result.current.count).toBe(0);

  act(() => {
    result.current.increment(5);
  });

  expect(result.current.count).toBe(5);
});

it("should decrement count by number passed to increment function", () => {
  const { result } = renderHook(() => useCounter());

  expect(result.current.count).toBe(0);

  act(() => {
    result.current.decrement(5);
  });

  expect(result.current.count).toBe(-5);
});

it("should use delta of 1 if argument to increment or decrement is not a number", () => {
  const { result } = renderHook(() => useCounter());

  expect(result.current.count).toBe(0);

  act(() => {
    result.current.increment("hey");
  });

  expect(result.current.count).toBe(1);
});
