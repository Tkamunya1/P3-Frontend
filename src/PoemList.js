import { Link } from "react-router-dom"



const BookList = ({ poems }) => {
 

  return (
<div className="poem-list">
      {poems.map( poem => (
        <div className="poem-preview" key={poem.id} >

          <h2>{ poem.title }</h2>
          <p>{ poem.lines }</p>
          <h5>Written by { poem.author } </h5>
          <p>No. of lines{ poem.linecount }</p>
          <button>Delete Sonnet </button>
          <button>Edit Sonnet </button>



          

        </div>
      ))}
    </div>
  );
}
 
export default BookList;


