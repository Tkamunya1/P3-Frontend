import BookList from "./BookList";
import useFetch from "./useFetch";


const Home = () => {
  const { error, isPending, data: books } = useFetch('https://safe-river-01894.herokuapp.com/books')


  return (
    <div className="home">
      <h1> Web Development Books Under One Roof </h1>
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      {books && <BookList books={books} />}
    </div>
  );
}
 
export default Home;