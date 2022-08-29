import Todo from "./Todo";

const TodoList = ({ todos }) => {
  return (
    <>
      <h2 className="todo_header">My To do's</h2>
      <section className="todo-grid">
        {todos && todos.length > 0 ? (
          todos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              content={todo.content}
            />
          ))
        ) : (
          <p>Ingen todos</p>
        )}
      </section>
    </>
  );
};

export default TodoList;
