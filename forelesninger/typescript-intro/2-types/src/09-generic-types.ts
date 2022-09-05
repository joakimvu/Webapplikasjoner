type User = {
  id: number
  name: string
}

type Post = {
  id: number
  slug: string
  title: string
}

type CachedValue<ValueType> = {
  value: ValueType
  lastUpdated: Date
}

type CachedPost = {
  value: Post
  lastUpdated: Date
}

const acceptCachedValue = (input: CachedValue<unknown>) => {
  console.log(`Value was last updated at ${input.lastUpdated}`)
}

const acceptCachedPost = (input: CachedValue<Post>) => {
  console.log(`Value was last updated at ${input.lastUpdated}`)
}
