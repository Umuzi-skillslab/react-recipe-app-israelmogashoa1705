import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Card from '../components/UI/Card';
import AudioPlayer from '../components/Media/AudioPlayer';

const Home = ({ recipes = [] }) => {
  // Limit the homepage to the first three recipes for the featured section.
  const featuredRecipes = recipes.slice(0, 3);

    return (
    <main className="page-container">
      {/* Hero section introduces Savora and directs users to the recipe collection. */}
      <section className="hero">
        <div>
          <span className="eyebrow">
            Cook · Discover · Plan
          </span>

          <h1>
            Delicious ideas for every day.
          </h1>

          <p>
            Discover recipes, save your favorites, and
            build a weekly meal plan with Savora.
          </p>

          <Link
            to="/recipes"
            className="button button-primary"
          >
            Explore Recipes
          </Link>
        </div>

        <div className="hero-emoji" style={{ fontSize: '7rem' }}>
          🍝
        </div>
      </section>

