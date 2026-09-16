// Create a fresh seven-day meal-plan object.
export const createEmptyMealPlan = () => {
  const days = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ];

  return days.reduce((plan, day) => {
    plan[day] = {
      breakfast: null,
      lunch: null,
      dinner: null,
    };

    return plan;
  }, {});
};

// Format a number of minutes into a friendly label.
export const formatCookTime = (minutes) => {
  if (minutes < 60) {
    return `${minutes} min`;
  }

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return remainingMinutes
    ? `${hours}h ${remainingMinutes}m`
    : `${hours}h`;
};

// Capitalize category/cuisine labels before displaying them.
export const capitalize = (value = '') =>
  value.charAt(0).toUpperCase() + value.slice(1);
