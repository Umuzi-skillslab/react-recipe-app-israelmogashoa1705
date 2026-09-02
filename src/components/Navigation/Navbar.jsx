import { NavLink } from 'react-router-dom';

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

