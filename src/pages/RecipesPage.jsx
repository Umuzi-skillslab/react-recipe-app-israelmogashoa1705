import { useState } from 'react';
import PropTypes from 'prop-types';

import { recipesData } from '../data/recipesData';
import SearchBar from '../components/UI/SearchBar';
import RecipeList from '../components/Recipe/RecipeList';
import Loading from '../components/UI/Loading';

const RecipesPage = ({
  recipes,
  favorites,
  onFavoriteToggle,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCuisine, setSelectedCuisine] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [sortOption, setSortOption] = useState('title');
  const [isLoading] = useState(false);

  // Filter and sort the recipe data whenever the user's selections change.
  const filteredRecipes = useMemo(() => {
    const filtered = recipes.filter((recipe) => {
      const matchesSearch = recipe.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === 'all' ||
        recipe.category === selectedCategory;

      const matchesCuisine =
        selectedCuisine === 'all' ||
        recipe.cuisine === selectedCuisine;

      const matchesDifficulty =
        selectedDifficulty === 'all' ||
        recipe.difficulty === selectedDifficulty;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesCuisine &&
        matchesDifficulty
      );
    });

    return [...filtered].sort((a, b) => {
      if (sortOption === 'title') {
        return a.title.localeCompare(b.title);
      }

      if (sortOption === 'cookTime') {
        return a.cookTime - b.cookTime;
      }

      if (sortOption === 'difficulty') {
        return a.difficulty.localeCompare(b.difficulty);
      }

      return 0;
    });
  }, [
    recipes,
    searchTerm,
    selectedCategory,
    selectedCuisine,
    selectedDifficulty,
    sortOption,
  ]);








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
