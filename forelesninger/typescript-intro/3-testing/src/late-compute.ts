export const lateCompute = (waitTimeMs: number, callback: () => void) => {
  setTimeout(callback, waitTimeMs)
}
