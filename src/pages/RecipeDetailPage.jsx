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

