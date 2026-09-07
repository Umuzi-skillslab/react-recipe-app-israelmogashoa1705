import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Card from '../components/UI/Card';
import AudioPlayer from '../components/Media/AudioPlayer';

const Home = ({ recipes = [] }) => {
  // Limit the homepage to the first three recipes for the featured section.
  const featuredRecipes = recipes.slice(0, 3);
