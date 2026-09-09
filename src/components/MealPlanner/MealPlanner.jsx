import PropTypes from 'prop-types';


import Button from '../UI/Button';
import DayCard from './DayCard';

const MealPlanner = ({
  recipes,
  mealPlan,
  onAddMeal,
  onRemoveMeal,
  onClearWeek,
}) => {
  // Keep the seven days in one reusable collection.
  const daysOfWeek = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ];

  // Count how many meal slots are currently filled so the summary is accurate.
  const filledSlots = daysOfWeek.reduce((total, day) => {
    const dayCounts = Object.values(mealPlan[day]).filter(Boolean).length;
    return total + dayCounts;
  }, 0);

  const totalSlots = daysOfWeek.length * 3;

  return (
    <section className="meal-planner">
      <div className="planner-header">
        <div>
          <span className="eyebrow">
            Your Week
          </span>

          <h2>Weekly Meal Plan</h2>
        </div>

        <Button
          variant="danger"
          onClick={onClearWeek}
        >
          Clear Week
        </Button>
      </div>

      <div className="planner-grid">
        {daysOfWeek.map((day) => (
          <DayCard
            key={day}
            day={day}
            meals={mealPlan[day]}
            recipes={recipes}
            onAddMeal={onAddMeal}
            onRemoveMeal={onRemoveMeal}
          />
        ))}
      </div>
    </section>
  );
};

MealPlanner.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
  mealPlan: PropTypes.object.isRequired,
  onAddMeal: PropTypes.func.isRequired,
  onRemoveMeal: PropTypes.func.isRequired,
  onClearWeek: PropTypes.func.isRequired,
};

export default MealPlanner;
