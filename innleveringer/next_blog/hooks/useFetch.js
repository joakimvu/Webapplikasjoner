import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState([])
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsPending(true)
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error('Could not fetch the data for that resource')
        }
        return res.json()
      })
      .then((data) => {
        setData(data)
        setIsPending(false)
        setError(null)
      })
      .catch((error) => {
        setIsPending(false)
        setError(error.message)
      })
  }, [url])
  return { data, isPending, error }
}

export default useFetch
