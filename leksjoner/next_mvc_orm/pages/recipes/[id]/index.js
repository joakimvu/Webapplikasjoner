import { useRouter } from 'next/router'
import axios from 'axios'

const Recipe = () => {
  const router = useRouter()
  const { id } = router.query

  const getRecipe = async () => {
    // GET-request til /api/recipes[id].js
    const response = await axios.get(`/api/recipes/${id}`)
  }

  return (
    <div>
      <h1>Recipe {id}</h1>
      <button onClick={getRecipe}>Hent oppskrift</button>
    </div>
  )
}

export default Recipe
