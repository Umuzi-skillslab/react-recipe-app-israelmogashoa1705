import { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// the mobile navigation menu is currently open.
const Navbar = ({ favoriteCount = 0 }) => {
  // Track the open/closed state of the mobile navigation menu.
  const [menuOpen, setMenuOpen] = useState(false);

  // Return the appropriate CSS classes based on whether
  // the current navigation link matches the active route.
  const getNavClass = ({ isActive }) =>
    isActive ? 'nav-link active' : 'nav-link';

  // Close the mobile navigation menu after the user selects a navigation link.
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Display the application branding, mobile menu toggle,
  // and navigation links.
  return (
    <header className="site-header">
      <nav className="navbar">

        {/* 
          Clicking the brand returns the user to the home page
          and closes the mobile navigation menu.
        */}
        <NavLink
          to="/"
          className="brand"
          onClick={closeMenu}
        >
          <span className="brand-icon">🍴</span>
          <span>Savora</span>
        </NavLink>

  const Navbar = () => {
    return (
        <nav>
          <h1>Savora</h1>

          <NavLink to="/">Home</NavLink>
          <NavLink to="/recipes">Recipes</NavLink>
          <NavLink to="/meal-planner">Meal Planner</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </nav>
        );
  };

        export default Navbar;


/*

import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Navbar = ({ favoriteCount = 0 }) => {
  // NavLink automatically provides information about whether a route is active.
  const getNavClass = ({ isActive }) =>
    isActive ? 'nav-link active' : 'nav-link';

  return (
    <header className="site-header">
      <nav className="navbar">
        <NavLink
          to="/"
          className="brand"
          aria-label="Savora home"
        >
          <span className="brand-icon">🍴</span>
          <span>Savora</span>
        </NavLink>

        <div className="nav-links">
          <NavLink to="/" className={getNavClass}>
            Home
          </NavLink>

          <NavLink
            to="/recipes"
            className={getNavClass}
          >
            Recipes
          </NavLink>

          <NavLink
            to="/meal-planner"
            className={getNavClass}
          >
            Meal Planner
          </NavLink>

          <NavLink
            to="/favorites"
            className={getNavClass}
          >
            Favorites
            {favoriteCount > 0 && (
              <span
                className="favorite-count"
                aria-label={`${favoriteCount} favorites`}
              >
                {favoriteCount}
              </span>
            )}
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  favoriteCount: PropTypes.number,
};

export default Navbar;


*/

