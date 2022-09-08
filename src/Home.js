import useFetch from "./useFetch";
import PoemList from "./PoemList";


const Home = () => {
  const { error, isPending, data: poems } = useFetch('https://glacial-mesa-88711.herokuapp.com/poems')


  return (
    <div className="home">
      <h1> The Best of William Shakespeare </h1>
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      {/* {poems && <BookList poems={poems} />} */}
      {poems && <PoemList poems={poems} />}
  

    </div>
  );
}
 
export default Home;