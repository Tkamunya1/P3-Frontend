// import { useParams, useHistory } from "react-router-dom";
// import useFetch from "./useFetch";

// const BookDetails = () => {
//   const { id } = useParams();
//   const { data: blog, error, isPending } = useFetch('https://safe-citadel-50910.herokuapp.com/blogs' + id );

//   const his = useHistory();
//   const handleClick = () => {
//    fetch('https://safe-citadel-50910.herokuapp.com/blogs' + blog.id, {
//      method: 'DELETE'
//    }).then(() => {
//      his.push('/');
//    }) 
//  }

//   return (
//     <div className="book-details">
//       { isPending && <div>Loading...</div> }
//       { error && <div>{ error }</div> }
//       { blog && (
//         <article>
//           <h2>{ blog.title }</h2>
//           <p>Written by { blog.author }</p>
//           <div>{ blog.body }</div>
//           {/* {<button> onClick= {handleClick} delete</button> } */}

//         </article>
//       )}
//     </div>
//   );
// }
 
// export default BookDetails;




//https://safe-citadel-50910.herokuapp.com/blogs
