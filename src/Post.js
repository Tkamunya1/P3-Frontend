import { useState } from "react";
import { useHistory, Link } from "react-router-dom";


const Post = () => {
    const [title, setTitle ]= useState ("") 
    const [body, setBody ]= useState ("") 
    const [author, setAuthor ]= useState ("") 
    const [url, setUrl ]= useState ("") 

    const his = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();
        const book = { title, url, body, author };
    
        fetch('https://safe-river-01894.herokuapp.com/books', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(book)
        }).then(() => {
          console.log('new book added');
          his.push('/')
        })
      }

    return (
        <div className = "post-book">
            <h1> Post a New Book </h1>
            <form onSubmit={handleSubmit}>
                <label> Book Title </label>
                <input
                 type="text" 
                 required
                 value={title}
                 onChange={(e) => setTitle(e.target.value)}
                 />

              <label> image-url</label>
                <input
                 type="img" 
                 required
                 value={url}
                 onChange={(e) => setUrl(e.target.value)}
                 />
                 
                 
                 <label> Book Body  </label>
                 <textarea 
                 required
                 value={body}
                 onChange={(e) => setBody(e.target.value)}
                 >
                 </textarea>
                 <label> Author  </label>
                <input
                 type="text" 
                 required
                 value={author}
                 onChange={(e) => setAuthor(e.target.value)}
                 />
                 <button>Add Book </button>
            </form>
            </div>
     );
}
 
export default Post;