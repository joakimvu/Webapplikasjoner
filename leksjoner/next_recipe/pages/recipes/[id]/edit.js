import { useRouter } from 'next/router'
import axios from 'axios'

const EditRecipe = () => {
  const router = useRouter()
  const { id } = router.query

  const updateRecipe = async () => {
    // PUT-request til /api/recipes[id].js
    const response = await axios.put(`/api/recipes/${id}`, { valueToUpdate })
    router.push(`/recipes`)
  }

  return (
    <div>
      <h1>Recipe {id}</h1>
      <button onClick={updateRecipe}>Endre</button>
    </div>
  )
}

export default EditRecipe
