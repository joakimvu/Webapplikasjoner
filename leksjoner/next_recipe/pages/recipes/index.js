import { useRouter } from 'next/router'

export default function Recipes() {
  // useRouter gir oss et objekt med diverse info
  const router = useRouter()

  console.log({ router })
  return <div>Content</div>
}
