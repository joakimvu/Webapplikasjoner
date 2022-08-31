import useCounter from "./useCounter";

it("should use provided initial value for count", () => {
  const { result } = renderHook(() => useCounter(5));

  expect(result.current.count).toBe(5);
});
