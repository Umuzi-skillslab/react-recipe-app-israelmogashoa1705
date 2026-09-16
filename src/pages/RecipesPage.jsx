import { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import SearchBar from '../components/UI/SearchBar';
import RecipeList from '../components/Recipe/RecipeList';
import RecipeFilter from '../components/Recipe/RecipeFilter';
import Loading from '../components/UI/Loading';

const RecipesPage = ({
  recipes,
  favorites = [],
  onFavoriteToggle,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] =
    useState('all');
  const [selectedCuisine, setSelectedCuisine] =
    useState('all');
  const [selectedDifficulty, setSelectedDifficulty] =
    useState('all');
  const [sortOption, setSortOption] = useState('title');

  {/* Manage the recipe loading and error states. */}
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  {/* Simulate a short data-loading phase for the local recipe dataset. */}
  useEffect(() => {
    setIsLoading(true);
    setError('');

    const timer = setTimeout(() => {
      try {
        if (!recipes || recipes.length === 0) {
          throw new Error(
            'No recipe data is currently available.'
          );
        }

        setIsLoading(false);
      } catch (loadingError) {
        setError(loadingError.message);
        setIsLoading(false);
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [recipes]);

  {/* Build unique category options from the available recipes. */}
  const categories = useMemo(
    () => [
      ...new Set(
        recipes.map((recipe) => recipe.category)
      ),
    ],
    [recipes]
  );

  {/* Build unique cuisine options from the available recipes. */}
  const cuisines = useMemo(
    () => [
      ...new Set(
        recipes.map((recipe) => recipe.cuisine)
      ),
    ],
    [recipes]
  );

  {/* Filter recipes based on search and selected filters,
   then sort the matching results. */}
  const filteredRecipes = useMemo(() => {
    const filtered = recipes.filter((recipe) => {
      const normalizedSearch = searchTerm
        .trim()
        .toLowerCase();

      const matchesSearch =
        recipe.title.toLowerCase().includes(normalizedSearch) ||
        recipe.ingredients.some((ingredient) =>
          ingredient
            .toLowerCase()
            .includes(normalizedSearch)
        );


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
        return (
          a.prepTime +
          a.cookTime -
          (b.prepTime + b.cookTime)
        );
      }

      if (sortOption === 'difficulty') {
        return a.difficulty.localeCompare(
          b.difficulty
        );
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

  {/*Reset all search, filter, and sort controls to their defaults. */}
  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedCuisine('all');
    setSelectedDifficulty('all');
    setSortOption('title');
  };

  if (error) {
    return (
      <main className="page-container">
        <header className="page-header">
          <span className="eyebrow">
            Recipe Collection
          </span>

          <h1>Discover Recipes</h1>

          <p className="error-message">
            {error}
          </p>
        </header>
      </main>
    );
  }

  return (
    <main className="page-container">
      <header className="page-header">
        <span className="eyebrow">
          Recipe Collection
        </span>

        <h1>Discover Recipes</h1>

        <p>
          Explore delicious recipes for every meal and
          occasion.
        </p>
      </header>

      <SearchBar
        searchTerm={searchTerm}
        onSearch={setSearchTerm}
        placeholder="Search by recipe name..."
      />

      <RecipeFilter
        category={selectedCategory}
        cuisine={selectedCuisine}
        difficulty={selectedDifficulty}
        sortOption={sortOption}
        onCategoryChange={setSelectedCategory}
        onCuisineChange={setSelectedCuisine}
        onDifficultyChange={setSelectedDifficulty}
        onSortChange={setSortOption}
        onClearFilters={handleClearFilters}
        categories={categories}
        cuisines={cuisines}
      />

      <div className="results-summary">
        <p>
          Showing{' '}
          <strong>{filteredRecipes.length}</strong>{' '}
          of <strong>{recipes.length}</strong> recipes
        </p>

        {searchTerm && (
          <p>
            Searching for:{' '}
            <strong>"{searchTerm}"</strong>
          </p>
        )}
      </div>

      {isLoading ? (
        <Loading message="Loading delicious recipes..." />
      ) : (
        <RecipeList
          recipes={filteredRecipes}
          favorites={favorites}
          onFavoriteToggle={onFavoriteToggle}
        />
      )}

      {filteredRecipes.length === 0 &&
        !isLoading && (
          <p className="no-results-message">
            Try adjusting your search or filters.
          </p>
        )}
    </main>
  );
};

RecipesPage.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,

  favorites: PropTypes.arrayOf(
    PropTypes.object
  ),

  onFavoriteToggle: PropTypes.func.isRequired,
};

export default RecipesPage;

