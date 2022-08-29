import { useState } from 'react'
import { v4 as uuid } from 'uuid';

const Form = ({ setTodos }) => {
    // Lagrer tittel i en state
    const [title, setTitle] = useState();

    // Lagrer innhold i en state
    const [content, setContent] = useState();

    // Funksjon som håndterer tittel
    const handleTitleInput = (event) => {
        setTitle(event.target.value)
    }

    // Funksjon som håndterer innhold
    const handleContentInput = (event) => {
        setContent(event.target.value)
    }

    // Funksjon som håndterer knappen
    const handleSubmit = (event) => {
        event.preventDefault()
        const id = uuid()
        setTodos((prev) => [...prev,{ id, title, content}])
    }

    return ( 
        <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" onChange={handleTitleInput}/>

        <label htmlFor="content">Content</label>
        <textarea type="text" id="content" onChange={handleContentInput}></textarea>

        <button type="submit" id="btn">Add</button>
      </form>
     );
}
 
export default Form;