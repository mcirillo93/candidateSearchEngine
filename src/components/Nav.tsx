import { Link } from 'react-router-dom';
  // TODO: Add necessary code to display the navigation bar and link between the pages
   const Nav = () => {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Potential Candidates</Link>
          </li>
        </ul>
      </nav>
    );
  };

export default Nav;
