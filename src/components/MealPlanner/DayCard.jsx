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

    // Display the day name and all of its meal slots.
    return (
        <Card title={day}>
            <div className="day-meals">
                {mealTypes.map((mealType) => {
                    // Get the recipe currently assigned to this meal slot.
                    const meal = meals[mealType];

                    return (
                        <div className="meal-slot" key={mealType}>
                            {/* Display the meal type with its first letter capitalized. */}
                            <h3>
                                {mealType.charAt(0).toUpperCase() +
                                    mealType.slice(1)}
                            </h3>