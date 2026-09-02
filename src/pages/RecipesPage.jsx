import { useState } from 'react';
import { recipesData } from '../data/recipesData';
import RecipeList from '../components/Recipe/RecipeList';

const RecipesPage = () => {
  const [favorites, setFavorites] = useState([]);

  const handleFavoriteToggle = (recipe) => {
    const alreadyFavorite = favorites.some(
      (favorite) => favorite.id === recipe.id
    );

    if (alreadyFavorite) {
      setFavorites(
        favorites.filter(
          (favorite) => favorite.id !== recipe.id
        )
      );
    } else {
      setFavorites([...favorites, recipe]);
    }
  };

  return (
    <main>
      <h1>Recipes</h1>

      <RecipeList
        recipes={recipesData}
        favorites={favorites}
        onFavoriteToggle={handleFavoriteToggle}
      />
    </main>
  );
};

export default RecipesPage;
