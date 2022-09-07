import Navbar from './Navbar';
import Home from './Home';
import Post from "./Post"
import Blog from "./Blog"
import About from "./About"
import Contact from "./Contact"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookDetails from './BookDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <Post/>
            </Route>
            <Route path="/books/:id">
              <BookDetails/>
            </Route>
            
            <Route exact path="/blog">
              <Blog/>
            </Route>

            <Route exact path="/about">
              <About/>
            </Route>

            <Route exact path="/contact">
              <Contact/>
            </Route>


          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

//<Route exact path='/'> <home/> </Route>
