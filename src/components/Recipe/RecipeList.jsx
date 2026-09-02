import PropTypes from 'prop-types';
import RecipeCard from './RecipeCard';

const RecipeList = ({
  recipes,
  favorites = [],
  onFavoriteToggle,
}) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          isFavorite={favorites.some(
            (favorite) => favorite.id === recipe.id
          )}
          onFavoriteToggle={onFavoriteToggle}
        />
      ))}
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
