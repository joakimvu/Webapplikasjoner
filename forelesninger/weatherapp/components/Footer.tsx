import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <h3>Gå til</h3>
      <nav>
        <Link href="/">
          <a>Hjem</a>
        </Link>
        <Link href="/about">
          <a>Om oss</a>
        </Link>
        <Link href="/contact">
          <a>Kontakt</a>
        </Link>
      </nav>
    </footer>
  )
}
