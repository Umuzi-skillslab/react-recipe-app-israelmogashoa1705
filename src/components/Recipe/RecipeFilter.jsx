import PropTypes from 'prop-types';

// RecipeFilter displays the available recipe filters and
// sends the selected values back to the parent component.
const RecipeFilter = ({
  category,
  cuisine,
  difficulty,
  sortOption,
  onCategoryChange,
  onCuisineChange,
  onDifficultyChange,
  onSortChange,
  onClearFilters,
  categories = [],
  cuisines = [],