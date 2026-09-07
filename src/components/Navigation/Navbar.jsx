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
      <header className="navbar">

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

      {/*
          Toggle the mobile menu between its open and closed states.
          aria-expanded communicates the current state to assistive technologies.
        */}
      <button
        type="button"
        className="menu-toggle"
        onClick={() => setMenuOpen((current) => !current)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        ☰
      </button>

        // Apply an open-menu class when the mobile navigation is expanded.

      <div
        className={`nav-links ${menuOpen ? 'nav-links-open' : ''
          }`}
      >
        {/*
            Provide navigation to the application's home page.
          */}
        <NavLink
          to="/"
          className={getNavClass}
          onClick={closeMenu}
        >
          Home
        </NavLink>

        {/*
            Provide navigation to the recipe browsing page.
          */}
        <NavLink
          to="/recipes"
          className={getNavClass}
          onClick={closeMenu}
        >
          Recipes
        </NavLink>

        {/*
            Provide navigation to the weekly meal planning page.
          */}
        <NavLink
          to="/meal-planner"
          className={getNavClass}
          onClick={closeMenu}
        >
          Meal Planner
        </NavLink>

        {/*
            Provide navigation to the saved recipes page and
            display the number of saved recipes when applicable.
          */}
        <NavLink
          to="/favorites"
          className={getNavClass}
          onClick={closeMenu}
        >
          Favorites

          {/* 
              Only display the count when at least one recipe
              has been saved as a favorite.
            */}
          {favoriteCount > 0 && (
            <span className="favorite-count">
              {favoriteCount}
            </span>
          )}
        </NavLink>
      </div>
    </nav>
    </header >
  );
};

// Ensure the favorite count is received as a number when provided.
Navbar.propTypes = {
  favoriteCount: PropTypes.number,
};

// Make the navigation component available to the application layout.
export default Navbar;