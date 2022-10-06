import { useRouter } from 'next/router'
import axios from 'axios'

const DeleteRecipe = () => {
  const router = useRouter()
  const { id } = router.query

  const deleteRecipe = async () => {
    // DELETE-request til /api/recipes[id].js
    const response = await axios.delete(`/api/recipes/${id}`)
    router.push('/recipes')
  }

  return (
    <div>
      <h1>Recipe {id}</h1>
      <button onClick={deleteRecipe}>Slett</button>
    </div>
  )
}

export default DeleteRecipe
