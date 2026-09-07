import PropTypes from 'prop-types';

import Button from '../UI/Button';
import Card from '../UI/Card';

// Displays the meals assigned to a specific day of the meal plan.
const DayCard = ({
    day,
    meals,
    recipes,
    onAddMeal,
    onRemoveMeal,
}) => {
    // Keep the available meal slots in one place so they can
    // be reused when rendering each day's meals.
    const mealTypes = ['breakfast', 'lunch', 'dinner'];

    // Select a recipe and assign it to the requested meal slot.
    const handleAddMeal = (mealType) => {
        // Use the first available recipe as the default recipe
        // when adding a meal from this card.
        const recipe = recipes[0];

        // Only add the meal when a recipe is available.
        if (recipe) {
            onAddMeal(day, mealType, recipe);
        }
    };