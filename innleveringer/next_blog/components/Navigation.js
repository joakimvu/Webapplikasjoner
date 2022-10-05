import Link from 'next/Link'

const Navigation = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <h1>Next Blog</h1>
      </Link>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/create">
            <a>New Blog</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
