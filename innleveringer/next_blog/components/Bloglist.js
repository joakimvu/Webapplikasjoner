const Bloglist = ({ blogs, handleDelete }) => {
  return (
    <div className="blog-list">
      <h2>All blogs</h2>
      {blogs?.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.author}</p>
          <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
        </div>
      ))}
    </div>
  )
}

export default Bloglist
