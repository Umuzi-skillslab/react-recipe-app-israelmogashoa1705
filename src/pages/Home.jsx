import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Card from '../components/UI/Card';
import AudioPlayer from '../components/Media/AudioPlayer';

const Home = ({ recipes = [] }) => {
  // Limit the homepage to the first three recipes for the featured section.
  const featuredRecipes = recipes.slice(0, 3);

  // Derive category counts to populate the statistics strip.
  const breakfastCount = recipes.filter(
    (r) => r.category === 'breakfast'
  ).length;

  const dinnerCount = recipes.filter(
    (r) => r.category === 'dinner'
  ).length;

  const totalRecipes = recipes.length;

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

      {/* Featured recipes demonstrate parent-to-child data flow. */}
      <section className="home-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Featured</span>
            <h2>Recipes worth trying</h2>
          </div>

          <Link
            to="/recipes"
            className="text-link"
          >
            View all →
          </Link>
        </div>

        <div className="featured-grid">
          {featuredRecipes.map((recipe) => (
            <Card
              key={recipe.id}
              title={recipe.title}
              className="featured-card"
            >
              <p>
                {recipe.cuisine} · {recipe.difficulty}
              </p>

              <p>
                Ready in{' '}
                {recipe.prepTime + recipe.cookTime} minutes
              </p>

              <Link
                to={`/recipes/${recipe.id}`}
                className="button button-secondary"
              >
                View Recipe
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* Audio guide satisfies the cooking tips multimedia requirement. */}
      <section className="home-section">
        <AudioPlayer
          audioUrl="/assets/audio/breakfast-tips.mp3"
          title="Cooking Tips Audio Guide"
        />
      </section>
    </main>
  );
};

Home.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object),
};

export default Home;

