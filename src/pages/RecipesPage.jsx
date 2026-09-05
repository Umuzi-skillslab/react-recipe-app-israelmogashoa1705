import { useState } from 'react';
import PropTypes from 'prop-types';

import { recipesData } from '../data/recipesData';
import SearchBar from '../components/UI/SearchBar';
import RecipeList from '../components/Recipe/RecipeList';
import Loading from '../components/UI/Loading';

const RecipesPage = () => {
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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

  const filteredRecipes = recipesData.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <h1>Recipes</h1>

      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      <RecipeList
        recipes={filteredRecipes}
        favorites={favorites}
        onFavoriteToggle={handleFavoriteToggle}
      />
    </main>
  );
};

export default RecipesPage;
