import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>Revisiting William Shakespeare</h1>
        <div className="links">
          <Link to ="/">Home</Link>
          <Link to ="/create">Post A Sonnet</Link>
          <Link to ="/about">About</Link>
           <Link to ="/contact">Contact</Link>
           <Link to ="/blog">Blog</Link>


        </div>
      </nav>
    );
  }
   
  export default Navbar;