import PropTypes from 'prop-types';

import MealPlanner from '../components/MealPlanner/MealPlanner';

// Provides the page-level container for the weekly meal planner.
const MealPlannerPage = ({
  recipes,
  mealPlan,
  onAddMeal,
  onRemoveMeal,
  onClearWeek,