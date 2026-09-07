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

  // Convert the URL parameter from a string into a number,
  // then find the matching recipe from the available recipes.
  const recipe = useMemo(
    () => recipes.find((item) => item.id === Number(id)),
    [recipes, id]
  );


  // Display a friendly error message and provide a way back to the recipe list
  // when the requested recipe cannot be found.
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
    onAddToMealPlan('monday', 'breakfast', recipe);
  };

  // Add the current recipe to the Monday lunch meal-plan slot.
  const handleAddLunch = () => {
    onAddToMealPlan('monday', 'lunch', recipe);
  };

  // Display the selected recipe, its actions, nutritional information,
  // ingredients, instructions, and media content.
  return (
    <main className="page-container recipe-detail"></main>

      // Allow users to return to the main recipes list.
      <Button
        variant="secondary"
        onClick={() => navigate('/recipes')}
      >
        ← Back to Recipes
      </Button>

      // Show the recipe category, title, cuisine, difficulty,
      // and calculated total preparation and cooking time.
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
