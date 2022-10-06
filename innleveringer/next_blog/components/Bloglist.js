import Link from 'next/Link'
import { useState, useEffect } from 'react'

const Bloglist = ({ blogs, handleDelete }) => {
  return (
    <div className="blog-list">
      <h2>All blogs</h2>
      {blogs?.map((blog) => (
        <div className="blog-preview" key={blog?.id}>
          <Link href={`/blogs/${blog?.id}`}>
            <a>
              <h2>{blog?.title}</h2>
              <p>{blog?.author}</p>
            </a>
          </Link>
          {/* <button onClick={() => handleDelete(blog.id)}>Delete Blog</button> */}
        </div>
      ))}
    </div>
  )
}

export default Bloglist
