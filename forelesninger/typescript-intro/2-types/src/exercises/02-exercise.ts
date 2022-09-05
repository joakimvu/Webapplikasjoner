/**
 * How do we ensure that method is only one of the valid HTTP methods.
 */
export const customFetcher = (method: string, url: string, data?: unknown) => {
  let body: string | undefined = undefined
  if (data) {
    body = JSON.stringify(data)
  }
  return () =>
    fetch(url, {
      method,
      body,
    })
}

customFetcher(
  // @ts-expect-error
  'INVALID',
  'http://example.com',
)
