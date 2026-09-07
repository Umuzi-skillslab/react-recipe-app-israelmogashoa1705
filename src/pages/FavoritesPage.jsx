import PropTypes from 'prop-types';

import RecipeList from '../components/Recipe/RecipeList';
import EmptyState from '../components/UI/EmptyState';

// Displays the user's saved recipes and handles the case
// where no recipes have been added to favorites.
const FavoritesPage = ({
  favorites = [],
  onFavoriteToggle,
}) => {
  // Introduce the favorites section and explain what the page contains.
  return (
    <main className="page-container">
      <header className="page-header">
        <span className="eyebrow">Saved Recipes</span>

        <h1>Favorites</h1>

        <p>
          Your favorite recipes, ready whenever you are.
        </p>
      </header>

      {/* 
        Render the saved recipes when the favorites list contains
        at least one recipe. The same favorites data is passed to
        RecipeList so the favorite buttons can display the correct state.
      */}
      {favorites.length > 0 ? (
        <RecipeList
          recipes={favorites}
          favorites={favorites}
          onFavoriteToggle={onFavoriteToggle}
        />
      ) : (