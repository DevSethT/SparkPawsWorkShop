import "./NavBar.css";
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar">
        <Link to="/">Home</Link>
        {/* spit the prjects into categories */}
        {/* <Link to="/projects">Projects</Link> */}
         {/* <Link to="/repair">Repair</Link>
         <Link to="/coding">Coding</Link> */}
          {/* add a page for the home lab */}
          {/* <Link to="/homelab">Homelab</Link> */}
        {/* hide invatory page unless user is logged in */}
        {/* <Link to="/invatory">Invatory</Link> */}
        <Link to="/teardown&repair">Teardown & Repair</Link>
        <Link to="/coding">Coding</Link>
        <Link to="/building">Building</Link>
    </nav>
  );
}

export default NavBar;