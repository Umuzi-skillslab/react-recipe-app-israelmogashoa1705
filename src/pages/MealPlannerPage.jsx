import PropTypes from 'prop-types';
import './App.css';

import MealPlanner from '../components/MealPlanner/MealPlanner';

// Provides the page-level container for the weekly meal planner.
const MealPlannerPage = ({
  recipes,
  mealPlan,
  onAddMeal,
  onRemoveMeal,
  onClearWeek,
}) => {
  // Introduce the weekly planning section and explain the purpose
  // of the meal planner to the user.
  return (
    <main className="page-container">
      <header className="page-header">
        <span className="eyebrow">
          Weekly Planning
        </span>

        <h1>Meal Planner</h1>

        <p>
          Organize breakfast, lunch, and dinner for the
          entire week.
        </p>
      </header>

      {/*
        Pass the recipe data, meal plan, and meal-management
        callbacks down to the MealPlanner component.
      */}
      <MealPlanner
        recipes={recipes}
        mealPlan={mealPlan}
        onAddMeal={onAddMeal}
        onRemoveMeal={onRemoveMeal}
        onClearWeek={onClearWeek}
      />
    </main>
  );
};

// Define the required data and callback types expected by the page.
MealPlannerPage.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
  mealPlan: PropTypes.object.isRequired,
  onAddMeal: PropTypes.func.isRequired,
  onRemoveMeal: PropTypes.func.isRequired,
  onClearWeek: PropTypes.func.isRequired,
};

// Make the page available to the application's routing configuration.
export default MealPlannerPage;
