import { useState } from 'react'

import axios from 'axios'

const Summing = () => {
  const [numberOne, setNumberOne] = useState('')
  const [numberTwo, setNumberTwo] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = await axios.post('/api/sum', { numberOne, numberTwo })
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={numberOne}
        onChange={(e) => setNumberOne(e.target.value)}
      />
      <input
        type="text"
        value={numberTwo}
        onChange={(e) => setNumberTwo(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  )
}

export default Summing
