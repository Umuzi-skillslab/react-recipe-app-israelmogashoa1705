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
      {/* Hero section */}
      <section className="hero">
        <div>
          <span className="eyebrow">Cook · Discover · Plan</span>

          <h1>Delicious ideas for every day.</h1>

          <p>
            Browse {totalRecipes} recipes, save your favourites, and
            build a full weekly meal plan — all in one place.
          </p>

          <Link
            to="/recipes"
            className="button button-primary"
          >
            Explore Recipes
          </Link>
        </div>

        <div
          className="hero-emoji"
          style={{ fontSize: '6rem' }}
        >
          🍝
        </div>
      </section>

      {/* Statistics strip */}
      <div className="stats-strip">
        <div className="stat-card">
          <span className="stat-number">{totalRecipes}</span>
          <p className="stat-label">Recipes available</p>
        </div>

        <div className="stat-card">
          <span className="stat-number">{breakfastCount}</span>
          <p className="stat-label">Breakfast options</p>
        </div>

        <div className="stat-card">
          <span className="stat-number">{dinnerCount}</span>
          <p className="stat-label">Dinner ideas</p>
        </div>
      </div>

      {/* Featured recipes */}
      <section className="home-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Featured</span>
            <h2>Recipes worth trying</h2>
          </div>

          <Link to="/recipes" className="text-link">
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
              <img
                src={recipe.image}
                alt={recipe.title}
                className="recipe-image"
              />

              <div className="recipe-card-content">
                <span className="recipe-category">
                  {recipe.category}
                </span>

                <h2>{recipe.title}</h2>

                <p>
                  <strong>Cuisine:</strong> {recipe.cuisine}
                </p>

                <p>
                  {recipe.cuisine} · {recipe.difficulty}
                </p>

                <p>
                  Ready in {recipe.prepTime + recipe.cookTime} minutes
                </p>

                <Link
                  to={`/recipes/${recipe.id}`}
                  className="button button-secondary"
                  style={{ marginTop: '8px' }}
                >
                  View Recipe
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Audio guide */}
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
