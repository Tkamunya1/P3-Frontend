import { useState } from "react";
import { useHistory, Link } from "react-router-dom";


const Post = () => {
    const [title, setTitle ]= useState ("") 
    const [lines, setLines ]= useState ("") 
    const [author, setAuthor ]= useState ("") 
    const [linecount, setLinecount ]= useState ("") 

    const his = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();
        const poem = { title, lines, linecount, author };
    
        fetch('https://glacial-mesa-88711.herokuapp.com/poems', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(poem)
        }).then(() => {
          console.log('new poem added');
          his.push('/')
        })
      }

    return (
        <div className = "post-poem">
            <h1> Post a New Sonnet </h1>
            <form onSubmit={handleSubmit}>
                <label> Sonnet Title </label>
                <input
                 type="text" 
                 required
                 value={title}
                 onChange={(e) => setTitle(e.target.value)}
                 />
                 
                 
                 <label> Sonnet Body  </label>
                 <textarea 
                 required
                 value={lines}
                 onChange={(e) => setLines(e.target.value)}
                 >
                 </textarea>
                 <label> Author  </label>
                <input
                 type="text" 
                 required
                 value={author}
                 onChange={(e) => setAuthor(e.target.value)}
                 />
                 <button>Add Sonnet </button>
            </form>
            </div>
     );
}
 
export default Post;