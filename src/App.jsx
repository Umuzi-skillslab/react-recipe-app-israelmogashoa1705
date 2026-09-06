import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';

import Home from './pages/Home';
import RecipesPage from './pages/RecipesPage';
import RecipeDetailPage from './pages/RecipeDetailPage';
import MealPlannerPage from './pages/MealPlannerPage';
import FavoritesPage from './pages/FavoritesPage';
import NotFound from './pages/NotFound';

import { recipesData } from './data/recipesData';

function App() {
  // Favorites are stored in the parent so multiple pages can use the same state.
  const [favorites, setFavorites] = useState([]);

  // Meal planner state is also lifted to App because several components will use it.
  const [mealPlan, setMealPlan] = useState({
    monday: { breakfast: null, lunch: null, dinner: null },
    tuesday: { breakfast: null, lunch: null, dinner: null },
    wednesday: { breakfast: null, lunch: null, dinner: null },
    thursday: { breakfast: null, lunch: null, dinner: null },
    friday: { breakfast: null, lunch: null, dinner: null },
    saturday: { breakfast: null, lunch: null, dinner: null },
    sunday: { breakfast: null, lunch: null, dinner: null },
  });

  // Load saved favorites and meal plans when the application first starts.
  useEffect(() => {
    const savedFavorites = localStorage.getItem('savoraFavorites');
    const savedMealPlan = localStorage.getItem('savoraMealPlan');

    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }

    if (savedMealPlan) {
      setMealPlan(JSON.parse(savedMealPlan));
    }

  } catch (error) {
    // Invalid localStorage data should not crash the application.
    console.error('Could not load saved application data.', error);
  }
}, []);

// Save favorites whenever the favorites state changes.
useEffect(() => {
  localStorage.setItem(
    'savoraFavorites',
    JSON.stringify(favorites)
  );
}, [favorites]);

// Save the weekly meal plan whenever it changes.
useEffect(() => {
  localStorage.setItem(
    'savoraMealPlan',
    JSON.stringify(mealPlan)
  );
}, [mealPlan]);

// Add a recipe to favorites or remove it if it is already saved.
const handleFavoriteToggle = (recipe) => {
  setFavorites((currentFavorites) => {
    const alreadyFavorite = currentFavorites.some(
      (favorite) => favorite.id === recipe.id
    );

    return alreadyFavorite
      ? currentFavorites.filter(
        (favorite) => favorite.id !== recipe.id
      )
      : [...currentFavorites, recipe];
  });
};

// Add a recipe to a specific day and meal slot.
const handleAddToMealPlan = (day, meal, recipe) => {
  setMealPlan((currentMealPlan) => ({
    ...currentMealPlan,
    [day]: {
      ...currentMealPlan[day],
      [meal]: recipe,
    },
  }));
};

// Remove a recipe from a specific meal slot.
const handleRemoveFromMealPlan = (day, meal) => {
  setMealPlan((currentMealPlan) => ({
    ...currentMealPlan,
    [day]: {
      ...currentMealPlan[day],
      [meal]: null,
    },
  }));
};

// Clear every meal slot in the current weekly plan.
const handleClearMealPlan = () => {
  const emptyPlan = Object.keys(mealPlan).reduce(
    (plan, day) => ({
      ...plan,
      [day]: {
        breakfast: null,
        lunch: null,
        dinner: null,
      },
    }),
    {}
  );

  setMealPlan(emptyPlan);
};


return (
  <BrowserRouter>
    <Navbar favoriteCount={favorites.length} />

    <Routes>
      <Route
        path="/"
        element={
          <Home
            recipes={recipesData}
          />
        }
      />

      <Route
        path="/recipes"
        element={
          <RecipesPage
            recipes={recipesData}
            favorites={favorites}
            onFavoriteToggle={handleFavoriteToggle}
          />
        }
      />

      <Route
        path="/recipes"
        element={
          <RecipesPage
            recipes={recipesData}
            favorites={favorites}
            onFavoriteToggle={handleFavoriteToggle}
          />
        }
      />

      <Route
        path="/recipes/:id"
        element={
          <RecipeDetailPage
            recipes={recipesData}
            favorites={favorites}
            onFavoriteToggle={handleFavoriteToggle}
            onAddToMealPlan={handleAddToMealPlan}
          />
        }
      />


      <Route
        path="/meal-planner"
        element={
          <MealPlannerPage
            recipes={recipesData}
            mealPlan={mealPlan}
            onAddMeal={handleAddToMealPlan}
            onRemoveMeal={handleRemoveFromMealPlan}
            onClearWeek={handleClearMealPlan}
          />
        }
      />

      <Route
        path="/favorites"
        element={
          <FavoritesPage
            favorites={favorites}
            onFavoriteToggle={handleFavoriteToggle}
          />
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
}

export default App;


