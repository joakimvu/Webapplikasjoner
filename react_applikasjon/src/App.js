import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <main>
        {/* New todo form */}
        <form action="#">
          <label for="title">Title</label>
          <input type="text" id="title" />

          <label for="content">Content</label>
          <textarea type="text" id="content"></textarea>

          <input type="button" value="Add" id="add-btn" />
        </form>

        <h2 className="my-todo">My Todos</h2>

        {/* Todo list */}
        <section className="todo-grid">
          <section className="todo">
            <h3>To do title</h3>
            <p>I'm a baby sriracha hot chicken mixtape pabst organic air...</p>
            <input type="button" value="Complete" id="complete-btn" />
          </section>
          <section className="todo">
            <h3>To do title</h3>
            <p>I'm a baby sriracha hot chicken mixtape pabst organic air...</p>
            <input type="button" value="Complete" id="complete-btn" />
          </section>
          <section className="todo">
            <h3>To do title</h3>
            <p>I'm a baby sriracha hot chicken mixtape pabst organic air...</p>
            <input type="button" value="Complete" id="complete-btn" />
          </section>
          <section className="todo">
            <h3>To do title</h3>
            <p>I'm a baby sriracha hot chicken mixtape pabst organic air...</p>
            <input type="button" value="Complete" id="complete-btn" />
          </section>
          <section className="todo">
            <h3>To do title</h3>
            <p>I'm a baby sriracha hot chicken mixtape pabst organic air...</p>
            <input type="button" value="Complete" id="complete-btn" />
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
