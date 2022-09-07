import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>Coding Champs</h1>
        <div className="links">
          <Link to ="/">Home</Link>
          <Link to ="/create">New Course</Link>
          <Link to ="/blog">Blog</Link>
          <Link to ="/about">About</Link>
           <Link to ="/contact">Contact</Link>

        </div>
      </nav>
    );
  }
   
  export default Navbar;