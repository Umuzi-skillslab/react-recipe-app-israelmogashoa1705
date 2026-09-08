import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import VideoPlayer from '../components/Media/VideoPlayer';
import AudioPlayer from '../components/Media/AudioPlayer';

const RecipeDetailPage = ({
  recipes,
  favorites = [],
  onFavoriteToggle,
  onAddToMealPlan,
}) => {
  // Get the recipe ID from the current URL.
  const { id } = useParams();
  const navigate = useNavigate();

  // Store the selected day and meal for the weekly meal planner.
  const [selectedDay, setSelectedDay] =
    useState('monday');
  const [selectedMeal, setSelectedMeal] =
    useState('breakfast');

  // Convert the URL parameter from a string into a number, then find the matching recipe from the available recipes
  const recipe = useMemo(
    () => recipes.find((item) => item.id === Number(id)),
    [recipes, id]
  );


  // Display a friendly error message and provide a way back to the recipe list when the requested recipe cannot be found.
  if (!recipe) {
    return (
      <main className="page-container">
        <Card>
          <h1>Recipe Not Found</h1>
          <p>We couldn't find the recipe you're looking for.</p>

          <Button onClick={() => navigate('/recipes')}>
            Back to Recipes
          </Button>
        </Card>
      </main>
    );
  }

  // Check whether the current recipe already exists in the favorites list.
  const isFavorite = favorites.some(
    (favorite) => favorite.id === recipe.id
  );

  // Add the current recipe to the Monday breakfast meal-plan slot.
  const handleAddBreakfast = () => {
    onAddToMealPlan(
      selectedDay,
      selectedMeal,
      recipe
    );
  };

  // Display the selected recipe, its actions, nutritional information, ingredients, instructions, and media content.
  return (
    <main className="page-container recipe-detail">
      <Button
        variant="secondary"
        onClick={() => navigate('/recipes')}
      >
        ← Back to Recipes
      </Button>

      <header className="page-header">
        <span className="eyebrow">
          {recipe.category}
        </span>

        <h1>{recipe.title}</h1>


        <p>
          {recipe.cuisine} · {recipe.difficulty} ·{' '}
          {recipe.prepTime + recipe.cookTime} minutes
        </p>
      </header>

      // Display the recipe image and provide controls for favorites, and adding the recipe to the meal plan.
      <div className="detail-grid">
        <Card>
          <img
            src={recipe.image}
            alt={recipe.title}
            className="detail-image"
          />

          // Provide controls for managing favorites and adding the recipe, to specific meal-plan slots.
          <div className="detail-actions">
            <Button
              variant={isFavorite ? 'danger' : 'secondary'}
              onClick={() => onFavoriteToggle(recipe)}
            >
              {isFavorite
                ? '♥ Remove Favorite'
                : '♡ Add Favorite'}
            </Button>

            <label htmlFor="meal-plan-day">
              Day
            </label>

            <select
              id="meal-plan-day"
              value={selectedDay}
              onChange={(event) =>
                setSelectedDay(event.target.value)
              }
            >
              <option value="monday">
                Monday
              </option>

              <option value="tuesday">
                Tuesday
              </option>

              <option value="wednesday">
                Wednesday
              </option>

              <option value="thursday">
                Thursday
              </option>

              <option value="friday">
                Friday
              </option>

              <option value="saturday">
                Saturday
              </option>

              <option value="sunday">
                Sunday
              </option>
            </select>

            <label htmlFor="meal-plan-meal">
              Meal
            </label>

            <select
              id="meal-plan-meal"
              value={selectedMeal}
              onChange={(event) =>
                setSelectedMeal(event.target.value)
              }
            >
              <option value="breakfast">
                Breakfast
              </option>

              <option value="lunch">
                Lunch
              </option>

              <option value="dinner">
                Dinner
              </option>
            </select>

            <Button
              onClick={handleAddToMealPlan}
            >
              Add to Meal Plan
            </Button>
          </div>
        </Card>

        {/* Present the recipe's preparation time,
            cooking time, total time, and number of servings. */}
        <Card title="Recipe Information">
          <p>
            <strong>Preparation:</strong>{' '}
            {recipe.prepTime} minutes
          </p>

          <p>
            <strong>Cooking:</strong>{' '}
            {recipe.cookTime} minutes
          </p>

          <p>
            <strong>Total:</strong>{' '}
            {recipe.prepTime + recipe.cookTime} minutes
          </p>

          <p>
            <strong>Servings:</strong>{' '}
            {recipe.servings}
          </p>
        </Card>
      </div>

      {/* Render each ingredient as an individual
          list item. */}
      <section className="detail-section">
        <Card title="Ingredients">
          <ul className="ingredient-list">
            {recipe.ingredients.map(
              (ingredient, index) => (
                <li
                  key={`${recipe.id}-ingredient-${index}`}
                >
                  {ingredient}
                </li>
              )
            )}
          </ul>
        </Card>
      </section>

      {/* Render each cooking instruction
          as a numbered step. */}
      <section className="detail-section">
        <Card title="Instructions">
          <ol className="instruction-list">
            {recipe.instructions.map(
              (instruction, index) => (
                <li
                  key={`${recipe.id}-step-${index}`}
                >
                  <strong>
                    Step {index + 1}:
                  </strong>{' '}
                  {instruction}
                </li>
              )
            )}
          </ol>
        </Card>
      </section>

      {/* Provide additional instructional media
          for the selected recipe. */}
      <section className="detail-section media-grid">
        <VideoPlayer
          videoUrl={recipe.videoUrl}
          title={`${recipe.title} Tutorial`}
        />

        <AudioPlayer
          audioUrl={recipe.audioUrl}
          title="Cooking Tips"
        />
      </section>
    </main>
  );
};

// Define the expected props and their types to catch
// incorrect data being passed to the component.
RecipeDetailPage.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,

  favorites: PropTypes.arrayOf(
    PropTypes.object
  ),

  onFavoriteToggle: PropTypes.func.isRequired,

  onAddToMealPlan: PropTypes.func.isRequired,
};

// Make the recipe detail page available to other
// parts of the application.
export default RecipeDetailPage;