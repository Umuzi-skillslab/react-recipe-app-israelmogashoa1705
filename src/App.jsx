import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';

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
  }, []);

  // Save favorites whenever the favorites state changes.
  useEffect(() => {
    localStorage.setItem(
      'savoraFavorites',
      JSON.stringify(favorites)
    );
  }, [favorites]);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/recipes/:id" element={<RecipeDetailPage />} />
        <Route path="/meal-planner" element={<MealPlannerPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


