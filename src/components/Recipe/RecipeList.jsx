import PropTypes from 'prop-types';
import './App.css';

import RecipeCard from './RecipeCard';
import EmptyState from '../UI/EmptyState';

const RecipeList = ({
  recipes,
  favorites = [],
  onFavoriteToggle,
}) => {
  if (recipes.length === 0) {
    return (
      <EmptyState
        title="No recipes found"
        message="Try changing your search or filters."
      />
    );
  }

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => {
        const isFavorite = favorites.some(
          (favorite) => favorite.id === recipe.id
        );

        return (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            isFavorite={isFavorite}
            onFavoriteToggle={onFavoriteToggle}
          />
        );
      })}
    </div>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,

  favorites: PropTypes.arrayOf(
    PropTypes.object
  ),

  onFavoriteToggle: PropTypes.func.isRequired,
};

export default RecipeList;
