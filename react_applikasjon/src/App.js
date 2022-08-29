import "./index.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import TodoList from "./components/TodoList.js"

import { useState } from 'react'

function App() {
  // Lagre alle todos her i parent for å kunne brukes i andre komponenter
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <Navbar />

      <main>
        <Form setTodos={setTodos}/>
        <TodoList todos={todos}/>
      </main>
    </div>
  );
}

export default App;
