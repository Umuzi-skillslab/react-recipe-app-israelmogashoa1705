import { useMemo, useState } from 'react';
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

  // Track whether the meal-plan confirmation banner is visible.
  const [showConfirmation, setShowConfirmation] = useState(false);

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
    setShowConfirmation(true);
    // Hide the confirmation banner after two seconds.
    setTimeout(() => setShowConfirmation(false), 2000);
  };

  // Compute the difficulty badge colour without an if-else chain.
  const difficultyColor =
    recipe.difficulty === 'easy'
      ? '#166534'
      : recipe.difficulty === 'medium'
        ? '#92400e'
        : '#991b1b';

  // Display the selected recipe, its actions, nutritional information, ingredients, instructions, and media content.
  return (
    <main className="page-container recipe-detail">
      <Button
        variant="secondary"
        onClick={() => navigate('/recipes')}
      >
        ← Back to Recipes
      </Button>

      <header className="page-header" style={{ marginTop: '24px' }}>
        <span className="eyebrow">
          {recipe.category}
        </span>

        <h1>{recipe.title}</h1>


        <p>
          {recipe.cuisine} ·{' '}
          <span style={{ color: difficultyColor, fontWeight: 700 }}>
            {recipe.difficulty}
          </span>{' '}
          {recipe.prepTime + recipe.cookTime} minutes
        </p>
      </header>

      {/* Confirmation banner shown briefly after adding to the meal plan. */}
      {showConfirmation && (
        <div className="confirmation-banner">
          ✅ Added to {selectedDay} {selectedMeal}!
        </div>
      )}

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
            {/* Toggle favorite status for this recipe. */}
            <Button
              variant={isFavorite ? 'danger' : 'secondary'}
              onClick={() => onFavoriteToggle(recipe)}
            >
              {isFavorite ? '♥ Remove Favorite' : '♡ Add to Favorites'}
            </Button>

            <div className="meal-plan-controls">
              <h4 style={{ margin: '0 0 8px' }}>Add to Meal Plan</h4>

              {/* Day selector — onChange writes back to parent via state. */}
              <label htmlFor="meal-plan-day">Day</label>
              <select
                id="meal-plan-day"
                value={selectedDay}
                onChange={(event) => setSelectedDay(event.target.value)}
                className="meal-select"
              >
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
                <option value="thursday">Thursday</option>
                <option value="friday">Friday</option>
                <option value="saturday">Saturday</option>
                <option value="sunday">Sunday</option>
              </select>

              {/* Meal-slot selector. */}
              <label htmlFor="meal-plan-meal">Meal</label>
              <select
                id="meal-plan-meal"
                value={selectedMeal}
                onChange={(event) => setSelectedMeal(event.target.value)}
                className="meal-select"
              >
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
              </select>

              <Button onClick={handleAddBreakfast}>
                Add to Meal Plan
              </Button>
            </div>
          </div>
        </Card>

        {/* Right column: quick-reference recipe stats. */}
        <Card title="Recipe Information">
          <p>
            <strong>Preparation:</strong> {recipe.prepTime} minutes
          </p>
          <p>
            <strong>Cooking:</strong> {recipe.cookTime} minutes
          </p>
          <p>
            <strong>Total:</strong>{' '}
            {recipe.prepTime + recipe.cookTime} minutes
          </p>
          <p>
            <strong>Servings:</strong> {recipe.servings}
          </p>
          <p>
            <strong>Cuisine:</strong> {recipe.cuisine}
          </p>
          <p>
            <strong>Difficulty:</strong>{' '}
            <span style={{ color: difficultyColor, fontWeight: 700 }}>
              {recipe.difficulty}
            </span>
          </p>
        </Card>
      </div>

      {/* Ingredients list — each item is a separate list element. */}
      <section className="detail-section">
        <Card title="Ingredients">
          <ul className="ingredient-list">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={`${recipe.id}-ingredient-${index}`}>
                {ingredient}
              </li>
            ))}
          </ul>
        </Card>
      </section>

      {/* Step-by-step cooking instructions. */}
      <section className="detail-section">
        <Card title="Instructions">
          <ol className="instruction-list">
            {recipe.instructions.map((instruction, index) => (
              <li key={`${recipe.id}-step-${index}`}>
                <strong>Step {index + 1}:</strong> {instruction}
              </li>
            ))}
          </ol>
        </Card>
      </section>

      {/* Embedded tutorial video and cooking-tips audio for this recipe. */}
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

RecipeDetailPage.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
  favorites: PropTypes.arrayOf(PropTypes.object),
  onFavoriteToggle: PropTypes.func.isRequired,
  onAddToMealPlan: PropTypes.func.isRequired,
};

export default RecipeDetailPage;