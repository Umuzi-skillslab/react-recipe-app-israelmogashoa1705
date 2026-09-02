import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import Card from '../UI/Card';

const RecipeCard = ({
  recipe,
  isFavorite = false,
  onFavoriteToggle,
}) => {
  const totalTime = recipe.prepTime + recipe.cookTime;

  return (
    <Card>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="recipe-image"
      />

      <h2>{recipe.title}</h2>

      <p>
        Cuisine: {recipe.cuisine}
      </p>

      <p>
        Difficulty: {recipe.difficulty}
      </p>

      <p>
        Total Time: {totalTime} minutes
      </p>

      <p>
        Servings: {recipe.servings}
      </p>

      <div>
        <Link to={`/recipes/${recipe.id}`}>
          View Recipe
        </Link>

        <Button
          variant={isFavorite ? 'danger' : 'secondary'}
          onClick={() => onFavoriteToggle(recipe)}
        >
          {isFavorite ? '♥ Remove Favorite' : '♡ Add Favorite'}
        </Button>
      </div>
    </Card>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    cuisine: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    prepTime: PropTypes.number.isRequired,
    cookTime: PropTypes.number.isRequired,
    servings: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  isFavorite: PropTypes.bool,
  onFavoriteToggle: PropTypes.func.isRequired,
};

export default RecipeCard;
