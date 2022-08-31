import { useCounter } from "./useCounter";
import { renderHook } from "@testing-library/react-hooks";

// describe("Adding one", () => {
//   it("Adds one to counter", () => {
//     const { result } = renderHook(useCounter);
//     act(() => {
//       result.current.add();
//     });
//     expect(result.current.counter).toBe(1);
//   });
//   it("Removes one from counter", () => {
//     const { result } = renderHook(useCounter);
//     act(() => {
//       result.current.remove();
//     });
//     expect(result.current.counter).toBe(-1);
//   });
// });

it("should use provided initial value for count", () => {
  const { result } = renderHook(() => useCounter(5));

  expect(result.current.count).toBe(5);
});
