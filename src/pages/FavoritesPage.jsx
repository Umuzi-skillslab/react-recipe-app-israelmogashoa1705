import PropTypes from 'prop-types';

import RecipeList from '../components/Recipe/RecipeList';
import EmptyState from '../components/UI/EmptyState';

// Displays the user's saved recipes and handles the case
// where no recipes have been added to favorites.
const FavoritesPage = ({
  favorites =[],
  onFavoriteToggle,