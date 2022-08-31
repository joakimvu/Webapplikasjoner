import { useEffect, useState } from 'react'

const Posts = () => {
  const [posts, setPosts] = useState([])
  // Lager en statevariabel som jeg kan oppdatere om vi får en feil
  const [error, setError] = useState(false)

  const [id, setId] = useState('')

  const handleInputChange = (event) => {
    setId(event.currentTarget.value)
  }

  useEffect(() => {
    // sjekker om id har en verdi. Hvis ikke avbryt
    if (!id) return

    const getPost = async () => {
      // Venter på svarer fra fetch kallet
      // bruker `` for å kunne ha en dynamisk streng
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      )
      // sjekker om responsen vi får tilbake er ok
      if (response.ok) {
        // Venter på konverteringen til JSON av svaret fra fetch
        const data = await response.json()
        // Oppdaterer listen med dataen vi har fått tilbake
        // Må ha data inne [] her for å "fake" at det er en liste
        setPosts([data])
      } else {
        // oppdaterer error staten hvis responsen ikke er ok
        setError(true)
        // nullstiller listen hvis feil
        setPosts([])
      }
    }

    getPost()
    // trigger useEffect når komponenten lages og når id oppdateres
  }, [id])

  const getPosts = async () => {
    // Tukler med urlen
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    // sjekker om responsen vi får tilbake er ok
    if (response.ok) {
      const data = await response.json()
      setPosts(data?.slice(0, 10))
    } else {
      // oppdaterer error staten hvis responsen ikke er ok
      setError(true)
    }
  }

  return (
    <>
      {/* bruker conditional til å skrive ut meldingen hvis noe er feil */}
      {error ? <p>Noe gikk galt</p> : null}
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>{post?.title}</li>
        ))}
      </ul>
      <button type="button" onClick={getPosts}>
        Hent posts
      </button>
      <input type="text" onChange={handleInputChange} value={id} />
    </>
  )
}

export default Posts
