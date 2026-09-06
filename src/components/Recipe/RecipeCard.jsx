import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import Card from '../UI/Card';

const RecipeCard = ({
  recipe,
  isFavorite = false,
  onFavoriteToggle,
}) => {
  // Calculate the total preparation and cooking time before rendering.
  const totalTime = recipe.prepTime + recipe.cookTime;

  // Convert the difficulty into a visual indicator for the card.
  const difficultyIcon =
    recipe.difficulty === 'easy'
      ? '🟢'
      : recipe.difficulty === 'medium'
        ? '🟡'
        : '🔴';


  return (
    <Card className={isFavorite ? 'favorite-card' : ''}>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="recipe-image"
      />

      <div className="recipe-card-content">
        <span className="recipe-category">
          {recipe.category}
        </span>


        <h2>{recipe.title}</h2>

        <p>
          <strong>Cuisine</strong> {recipe.cuisine}
        </p>

        <p>
          <strong>Difficulty</strong>{' '}
          {difficultyIcon} {recipe.difficulty}
        </p>

        <p>
          <strong>Total Time</strong> {totalTime} minutes
        </p>

        <p>
          <strong>Servings</strong> {recipe.servings}
        </p>

        <div className="recipe-card-actions">
          <Link
            to={`/recipes/${recipe.id}`}
            className="button button-primary"
          >
            View Recipe
          </Link>

          <Button
            variant={isFavorite ? 'danger' : 'secondary'}
            onClick={() => onFavoriteToggle(recipe)}
          >
            {isFavorite
              ? '♥ Remove Favorite'
              : '♡ Add Favorite'}
          </Button>
        </div>
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
