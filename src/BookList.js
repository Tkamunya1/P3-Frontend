import { Link } from "react-router-dom"


const BookList = ({ books }) => {
 

  return (
<div className="book-list">
      {books.map( book => (
        <div className="book-preview" key={book.id} >

          <h2>{ book.title }</h2>
          {<img className="image-preview" src={ book.image } alt=""/>}
          <p>Description: { book.body }</p>
          <h5>Written by { book.author } </h5>
          <Link to ={"url"} >Order Book </Link>

        </div>
      ))}
    </div>
  );
}
 
export default BookList;


