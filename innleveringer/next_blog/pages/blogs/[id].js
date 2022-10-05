import { useRouter } from 'next/router'

const blogsDetail = () => {
  const router = useRouter()
  const pid = router.query.id

  //   console.log(pid)
  return <h2>Detail on blog {pid}</h2>
}

export default blogsDetail
