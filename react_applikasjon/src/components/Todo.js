const Todo = ({ id, title, content }) => {
    return ( 
      <section className="todo">
        <h3>{title}</h3>
        <p>{content}</p>
        <button type="button"id="btn">Complete</button>
      </section>
     );
}
 
export default Todo;