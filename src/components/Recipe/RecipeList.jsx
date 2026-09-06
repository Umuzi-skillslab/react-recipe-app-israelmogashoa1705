import PropTypes from 'prop-types';
import RecipeCard from './RecipeCard';
import EmptyState from '../UI/EmptyState';

const RecipeList = ({
  recipes,
  favorites = [],
  onFavoriteToggle,
}) => {
  if (recipes.length === 0) {
    return (
      <EmptyState
        title="Np recipes found"
        message="Try changing your search or filtering."
      />
    );
  }

  Log in
    You said:

Please help me with a project.

ChatGPT said:
  Absolutely! 😊 Tell me what the project is about and what you need help with.

You can send me:

The project topic or instructions
What you’ve done so far
Any questions or requirements
Your deadline
Whether you need help with research, planning, writing, calculations, slides, coding, or presentation
If you have the project brief, you can paste it here(or upload it), and we can work through it step by step.



You said:

  Instructions:
  Introduction
A local cooking school has partnered with food bloggers to create an interactive recipe discovery and meal planning application.They need a modern, responsive React application that allows users to browse recipes, plan weekly meals, watch cooking tutorials, and save their favorite dishes.You've been hired to build this application from scratch, demonstrating your proficiency in React fundamentals, component architecture, state management, and modern JavaScript practices.

Your task is to build a fully functional Recipe Discovery & Meal Planning application using React.You must create the entire application from the ground up, demonstrating mastery of functional components, hooks, props, event handling, routing, conditional rendering, and multimedia integration.The application must be well - organized, styled professionally, and provide an excellent user experience.
Project Overview: Recipe Discovery & Meal Planning App
Core Features Required:

Browse and search recipes by category, cuisine, or ingredients
View detailed recipe information with ingredients and instructions
Watch embedded cooking tutorial videos
Listen to cooking tips audio guides
Add recipes to a weekly meal planner(Monday - Sunday)
Mark recipes as favorites
Filter and sort recipes dynamically
Responsive navigation with multiple routes
Interactive user interface with smooth transitions
Explicit Quantitative Requirements
To pass this capstone, you must meet ALL of the following measurable requirements:
Component Architecture Requirements(Minimum to Pass)
  10 + functional components created(no class components)
  0 class components (only functional components allowed)
  8 + components imported and used in parent components
  5 + reusable components(used in multiple places)
Component file structure properly organized in src / components /
    3 + levels of nesting(parent > child > grandchild component structure)
Props Requirements(Minimum to Pass)
  10 + props passed between components
  3 + components receiving multiple props(3 + props each)
  2 + props with default values using defaultProps or default parameters
Props destructuring used in 5 + components
Props validation with PropTypes in 3 + components
Children prop used in 2 + components
  Expressions as props demonstrated 3 + times
Styling Requirements(Minimum to Pass)
  3 + styling approaches used:
CSS Modules OR styled - components(1 approach)
Inline styles(minimum 3 uses)
Conditional styling(minimum 2 uses)
  5 + styled components with custom CSS
Responsive design working on mobile, tablet, and desktop
Hover effects on 3 + interactive elements
Professional color scheme consistently applied
Typography hierarchy clearly established
JSX Requirements(Minimum to Pass)
  10 + JSX expressions embedded in components { expression }
  5 + expressions in attributes(e.g., className = { variable })
  5 + arrow functions used in component definitions
  3 + ternary operators for conditional rendering
2 + functions called within JSX for data transformation
Map function used 3 + times to render lists
Proper JSX syntax throughout(closing tags, camelCase attributes)
Event Handling Requirements(Minimum to Pass)
  8 + event handlers implemented across components
  5 + different event types used(click, change, submit, focus, blur, etc.)
  3 + onClick handlers for buttons / interactive elements
2 + onChange handlers for form inputs
1 onSubmit handler for form submission
Event object accessed in 2 + handlers(e.g., e.target.value)
  Parent - child event flow demonstrated 2 + times
Custom event handlers passed as props 3 + times
State Management Requirements(Minimum to Pass)
useState hook used in 5 + components
  8 + state variables created across application
Complex state(arrays / objects) managed in 2 + components
State updates triggering re - renders correctly
Lifting state up demonstrated 2 + times
useEffect hook used 3 + times
State persistence with localStorage implemented(1 + feature)
Data Flow Requirements(Minimum to Pass)
  Parent - to - child data flow demonstrated 5 + times
  Child - to - parent communication demonstrated 3 + times(callback props)
Sibling communication through parent state demonstrated 2 + times
Props drilling avoided with proper state placement
Data transformation before passing to child(2 + times)
Conditional Rendering Requirements(Minimum to Pass)
  5 + conditional renders using ternary operators
  3 + conditional renders using && operator
  2 + components that conditionally render entire sections
Loading states displayed during data operations
Empty states displayed when no data available
Error states handled and displayed
Multimedia Requirements(Minimum to Pass)
  1 video component with embedded video player
  1 audio component with audio controls
Video controls(play, pause) functional
Audio controls(play, pause) functional
Proper HTML5 video / audio elements used
Fallback content for unsupported browsers
Routing Requirements(Minimum to Pass)
React Router installed and configured
  4 + routes created(Home, Recipes, Meal Planner, Favorites)
Navigation component with links to all routes
Active route styling indicating current page
Route parameters used for dynamic routes(1 + route)
Programmatic navigation demonstrated(1 + use)
  404 Not Found page implemented
Code Quality Requirements(Minimum to Pass)
Consistent naming conventions(PascalCase for components)
    15 + meaningful comments explaining complex logic
No console errors in browser
No unused variables or imports
Consistent indentation(2 or 4 spaces throughout)
DRY principle followed(minimal code repetition)
Grading Formula
Total Points: 250(10 criteria × 25 points each)

Points per Level:

Level 1(Needs Work): 5 points
Level 2(Getting There): 10 points
Level 3(Acceptable): 20 points
Level 4(Outstanding): 25 points

Passing Requirements:

Minimum Score: 200 / 250(80 %)
Minimum Level: Level 3(20 points) on ALL 10 criteria
Automatic Fail: Scoring below Level 3 on ANY single criterion

Example Passing Scenario:

All 10 criteria at Level 3(20 points each) = 200 points = PASS

Example Failing Scenario:

  9 criteria at Level 4(25 points each) = 225 points
  1 criterion at Level 2(10 points) = 10 points
  Total: 235 points BUT still FAILS(didn't achieve Level 3 on all criteria)
Project Instructions
1. Project Setup and Planning

Begin by setting up your React development environment:

    Requirements:

    Use Create React App or Vite to initialize your project
Install React Router DOM(npm install react - router - dom)
Install PropTypes(npm install prop - types)
Create project folder structure
Plan component hierarchy and data flow

Recommended Folder Structure:

    recipe - app /

│

├── public /

│   ├── index.html

│   └── assets /

│       ├── images /

│       ├── videos /

│       └── audio /

│

├── src /

│   ├── components /

│   │   ├── Navigation /

│   │   │   ├── Navbar.jsx

│   │   │   └── Navbar.module.css

│   │   ├── Recipe /

│   │   │   ├── RecipeCard.jsx

│   │   │   ├── RecipeDetail.jsx

│   │   │   ├── RecipeList.jsx

│   │   │   └── Recipe.module.css

│   │   ├── MealPlanner /

│   │   │   ├── MealPlanner.jsx

│   │   │   ├── DayCard.jsx

│   │   │   └── MealPlanner.module.css

│   │   ├── Media /

│   │   │   ├── VideoPlayer.jsx

│   │   │   ├── AudioPlayer.jsx

│   │   │   └── Media.module.css

│   │   ├── UI /

│   │   │   ├── Button.jsx

│   │   │   ├── Card.jsx

│   │   │   ├── SearchBar.jsx

│   │   │   └── UI.module.css

│   │   └── common /

│   │       ├── Header.jsx

│   │       ├── Footer.jsx

│   │       └── common.module.css

│   │

│   ├── pages /

│   │   ├── Home.jsx

│   │   ├── RecipesPage.jsx

│   │   ├── MealPlannerPage.jsx

│   │   ├── FavoritesPage.jsx

│   │   └── NotFound.jsx

│   │

│   ├── data /

│   │   └── recipesData.js

│   │

│   ├── utils /

│   │   └── helpers.js

│   │

│   ├── App.jsx

│   ├── App.css

│   └── index.js

│

└── README.md

Create a planning document(PDF or text file, max 400 words) with:

Component hierarchy diagram
Data flow diagram
List of all components to be created
Props flow between components
State management strategy

2. Create Component Architecture

Build your component structure following React best practices:

Navigation Component(Required):

Create a Navbar component with links to all routes
Implement active route styling
Make it responsive(hamburger menu on mobile)
Use React Router Link components
Position as fixed or sticky header

Reusable UI Components(Minimum 5 Required):

Button component(with variant props: primary, secondary, danger)
Card component(for displaying content in containers)
SearchBar component(for filtering recipes)
Loading component(spinner or skeleton)
Modal component(for displaying detailed info)

Recipe Components(Required):

RecipeCard component(displays recipe summary)
RecipeList component(renders array of RecipeCards)
RecipeDetail component(shows full recipe information)
RecipeFilter component(filter by category / cuisine)

Meal Planner Components(Required):

MealPlanner component(main container)
DayCard component(represents one day - reusable 7 times)
Each day can have breakfast, lunch, dinner slots

Media Components(Required):

VideoPlayer component with embedded video
AudioPlayer component with audio controls
Both must have play / pause functionality

3. Implement Props System

Demonstrate proper props usage throughout:

Props Passing:

Pass recipe data from parent to RecipeCard
Pass event handlers as props to child components
Pass styling props to reusable components
Use destructuring in component parameters
Implement default props for optional values

Props Validation:

Add PropTypes to at least 3 components:

RecipeCard.propTypes = {

  recipe: PropTypes.shape({

    id: PropTypes.number.isRequired,

    title: PropTypes.string.isRequired,

    image: PropTypes.string,

    cookTime: PropTypes.number,

  }).isRequired,

  onFavorite: PropTypes.func,

};

Children Prop Usage:

Use children prop in Card component
Use children prop in Modal component
Demonstrate composition pattern

Expressions as Props:

Pass calculated values as props
Pass dynamic styles as props
Pass conditional values as props

4. Implement Styling

Create a professional, cohesive design:

CSS Modules Approach(Recommended):

Create.module.css files for each component
Import and use: import styles from './Component.module.css'
Apply: className = { styles.componentClass }

Inline Styles(Minimum 3 Uses):

Dynamic styles based on state / props
Example: style = {{ backgroundColor: isActive ? '#007bff' : '#6c757d' }}

Conditional Styling(Minimum 2 Uses):

Apply classes conditionally
Example: className = { isFavorite? styles.favorite : styles.normal }
Example: className = {`${styles.card} ${isSelected ? styles.selected : ''}`}

Responsive Design:

Mobile - first approach
Use media queries in CSS
Test on different screen sizes
Breakpoints: mobile(< 768px), tablet(768 - 1024px), desktop(> 1024px)

Professional Design Elements:

Consistent color palette(primary, secondary, accent colors)
Typography scale(h1 - h6, body text)
Spacing scale(consistent margins and padding)
Border radius for cards and buttons
Box shadows for depth
Hover effects and transitions

5. Master JSX Syntax

Use JSX effectively throughout:

Embedded Expressions(Minimum 10):

<h2>{recipe.title}</h2>

<p>Cook Time: {recipe.cookTime} minutes</p>

<div>Servings: {recipe.servings || 4}</div>

Expressions in Attributes(Minimum 5):

<img src={recipe.image} alt={recipe.title} />

<button className={styles[buttonVariant]}>Click</button>

<input type="text" value={searchTerm} onChange={handleSearch} />

Arrow Functions(Minimum 5):

const RecipeCard = ({ recipe, onFavorite }) => {

  return <div>...</div>;

};

const handleClick = () => {

  console.log('Clicked');

};

Ternary Operators(Minimum 3):

{ isLoading ? <Loading /> : <RecipeList recipes={recipes} /> }

{ favorites.length > 0 ? <FavoritesList /> : <EmptyState /> }

{ recipe.difficulty === 'easy' ? '🟢' : '🔴' }

Functions in JSX(Minimum 2):

{ recipes.filter(r => r.category === 'dessert').map(recipe => ...) }

{ formatCookTime(recipe.prepTime + recipe.cookTime) }

Map for Lists(Minimum 3 Uses):

  {
    recipes.map(recipe => (

      <RecipeCard key={recipe.id} recipe={recipe} />

    ))
  }

{
  daysOfWeek.map(day => (

    <DayCard key={day} day={day} meals={mealPlan[day]} />

  ))
}

{
  recipe.ingredients.map((ingredient, index) => (

    <li key={index}>{ingredient}</li>

  ))
}

6. Implement Event Handling

Create interactive components with various event types:

Click Events(Minimum 3):

<button onClick={handleAddToPlanner}>Add to Meal Plan</button>

<div onClick={() => handleRecipeClick(recipe.id)}>View Recipe</div>

<button onClick={toggleFavorite}>❤️ Favorite</button>

Change Events(Minimum 2):

<input 

  type="text" 

  value={searchTerm}

  onChange={(e) => setSearchTerm(e.target.value)}

/>

<select onChange={(e) => setCategory(e.target.value)}>

  <option value="all">All Categories</option>

  <option value="breakfast">Breakfast</option>

</select>

Form Submit(Minimum 1):

<form onSubmit={handleSearchSubmit}>

  <input type="text" />

  <button type="submit">Search</button>

</form>

Other Events:

onFocus for input highlighting
onBlur for validation
onMouseEnter for tooltips
onMouseLeave for hover effects

Event Handler Patterns:

Pass handlers as props from parent to child
Access event object: e.target.value, e.preventDefault()
Use arrow functions for handlers with parameters

7. Implement State Management with Hooks

Use useState and useEffect effectively:

useState Hook(Minimum 5 Components):

// Simple state

const [searchTerm, setSearchTerm] = useState('');

const [category, setCategory] = useState('all');

// Array state

const [favorites, setFavorites] = useState([]);

const [recipes, setRecipes] = useState([]);

// Object state

const [mealPlan, setMealPlan] = useState({

  monday: { breakfast: null, lunch: null, dinner: null },

  tuesday: { breakfast: null, lunch: null, dinner: null },

  // ... other days

});

// Boolean state

const [isLoading, setIsLoading] = useState(false);

const [showModal, setShowModal] = useState(false);

useEffect Hook(Minimum 3 Uses):

// Load data on mount

useEffect(() => {

  setRecipes(recipesData);

}, []);

// Load from localStorage on mount

useEffect(() => {

  const savedFavorites = localStorage.getItem('favorites');

  if (savedFavorites) {

    setFavorites(JSON.parse(savedFavorites));

  }

}, []);

// Save to localStorage when favorites change

useEffect(() => {

  localStorage.setItem('favorites', JSON.stringify(favorites));

}, [favorites]);

State Updates:

// Updating arrays

setFavorites([...favorites, recipe]);

setFavorites(favorites.filter(fav => fav.id !== recipeId));

// Updating objects

setMealPlan({

  ...mealPlan,

  monday: { ...mealPlan.monday, breakfast: recipe }

});

Lifting State Up:

Manage shared state in common parent component
Pass state and updater functions as props to children
Example: Favorites state in App.jsx, used by multiple pages

8. Implement Parent - Child Data Flow

Demonstrate proper component communication:

Parent to Child(Props Down):

// Parent (App.jsx)

<RecipeList

  recipes={recipes}

  favorites={favorites}

  onFavoriteToggle={handleFavoriteToggle}

/>

// Child (RecipeList.jsx)

const RecipeList = ({ recipes, favorites, onFavoriteToggle }) => {

  return (

    <div>

      {recipes.map(recipe => (

        <RecipeCard

          key={recipe.id}

          recipe={recipe}

          isFavorite={favorites.some(fav => fav.id === recipe.id)}

          onFavoriteToggle={onFavoriteToggle}

        />

      ))}

    </div>

  );

};

Child to Parent(Callbacks Up):

// Parent defines handler

const handleAddToMealPlan = (day, meal, recipe) => {

  setMealPlan({

    ...mealPlan,

    [day]: { ...mealPlan[day], [meal]: recipe }

  });

};

// Parent passes handler to child

<DayCard 

  day="monday"

  meals={mealPlan.monday}

  onAddMeal={handleAddToMealPlan}

/>

// Child calls handler

<button onClick={() => onAddMeal(day, 'breakfast', selectedRecipe)}>

  Add to Breakfast

</button>

Sibling Communication(Through Parent):

RecipeList and FavoritesList communicate through App.jsx state
Changes in one affect the other through shared state

9. Implement Conditional Rendering

Show / hide content based on state:

Ternary Operators(Minimum 5):

{
  isLoading ? (

    <div className={styles.loading}>Loading recipes...</div>

  ) : (

    <RecipeList recipes={filteredRecipes} />

  )
}

{
  favorites.length > 0 ? (

    <FavoritesList favorites={favorites} />

  ) : (

    <EmptyState message="No favorites yet. Start adding recipes!" />

  )
}

&& Operator(Minimum 3):

{ error && <div className={styles.error}>{error}</div> }

{ recipes.length === 0 && <p>No recipes found</p> }

{ showModal && <Modal onClose={() => setShowModal(false)} /> }

Conditional Sections(Minimum 2):

{
  selectedRecipe && (

    <RecipeDetail

      recipe={selectedRecipe}

      onClose={() => setSelectedRecipe(null)}

    />

  )
}

10. Create Media Components

Implement video and audio functionality:

Video Component:

const VideoPlayer = ({ videoUrl, title }) => {

  return (

    <div className={styles.videoContainer}>

      <h3>{title}</h3>

      <video controls width="100%">

        <source src={videoUrl} type="video/mp4" />

        Your browser does not support the video tag.

      </video>

    </div>

  );

};

Audio Component:

const AudioPlayer = ({ audioUrl, title }) => {

  return (

    <div className={styles.audioContainer}>

      <h4>{title}</h4>

      <audio controls>

        <source src={audioUrl} type="audio/mpeg" />

        Your browser does not support the audio element.

      </audio>

    </div>

  );

};

Integration:

Add cooking tutorial video to RecipeDetail page
Add cooking tips audio to Home page
Ensure controls work properly
Add fallback messages for unsupported browsers

11. Implement Routing with React Router

Create multi - page navigation:

Router Setup(App.jsx):

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/recipes" element={<RecipesPage />} />

        <Route path="/recipes/:id" element={<RecipeDetail />} />

        <Route path="/meal-planner" element={<MealPlannerPage />} />

        <Route path="/favorites" element={<FavoritesPage />} />

        <Route path="*" element={<NotFound />} />

      </Routes>

      <Footer />

    </BrowserRouter>

  );

}

Navigation Component:

import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

  const location = useLocation();



  return (

    <nav className={styles.navbar}>

      <Link

        to="/"

        className={location.pathname === '/' ? styles.active : ''}

      >

        Home

      </Link>

      <Link

        to="/recipes"

        className={location.pathname.includes('/recipes') ? styles.active : ''}

      >

        Recipes

      </Link>

      <Link

        to="/meal-planner"

        className={location.pathname === '/meal-planner' ? styles.active : ''}

      >

        Meal Planner

      </Link>

      <Link

        to="/favorites"

        className={location.pathname === '/favorites' ? styles.active : ''}

      >

        Favorites

      </Link>

    </nav>

  );

};

Dynamic Routes(Recipe Detail):

import { useParams, useNavigate } from 'react-router-dom';

const RecipeDetail = () => {

  const { id } = useParams();

  const navigate = useNavigate();



  const recipe = recipes.find(r => r.id === parseInt(id));



  if (!recipe) {

    return <div>Recipe not found</div>;

  }



  return (

    <div>

      <button onClick={() => navigate('/recipes')}>Back to Recipes</button>

      <h1>{recipe.title}</h1>

      {/* Recipe details */}

    </div>

  );

};

404 Not Found Page:

const NotFound = () => {

  const navigate = useNavigate();



  return (

    <div className={styles.notFound}>

      <h1>404 - Page Not Found</h1>

      <p>The page you're looking for doesn't exist.</p>

      <button onClick={() => navigate('/')}>Go Home</button>

    </div>

  );

};

12. Create Sample Data

Create a recipesData.js file with sample recipes:

export const recipesData = [

  {

    id: 1,

    title: "Classic Spaghetti Carbonara",

    category: "dinner",

    cuisine: "Italian",

    difficulty: "medium",

    cookTime: 25,

    servings: 4,

    image: "/assets/images/carbonara.jpg",

    videoUrl: "/assets/videos/carbonara-tutorial.mp4",

    ingredients: [

      "400g spaghetti",

      "200g pancetta",

      "4 egg yolks",

      "100g Parmesan cheese",

      "Black pepper",

      "Salt"

    ],

    instructions: [

      "Cook spaghetti according to package instructions",

      "Fry pancetta until crispy",

      "Mix egg yolks with Parmesan",

      "Combine hot pasta with pancetta",

      "Add egg mixture and toss quickly",

      "Season with pepper and serve"

    ]

  },

  // Add 15-20 more recipes covering different categories

];

Required Recipe Categories:

Breakfast(at least 3 recipes)
Lunch(at least 4 recipes)
Dinner(at least 5 recipes)
Dessert(at least 3 recipes)
Snacks(at least 2 recipes)

13. Implement Core Features

Search and Filter:

Search by recipe title
Filter by category(breakfast, lunch, dinner, dessert, snacks)
Filter by cuisine(Italian, Mexican, Asian, American, etc.)
Filter by difficulty(easy, medium, hard)
Clear filters button

Favorites System:

Add / remove recipes from favorites
Persist favorites in localStorage
Display favorites count in navbar
Favorites page showing all saved recipes

Meal Planner:

7 day cards(Monday - Sunday)
Each day has breakfast, lunch, dinner slots
Drag - and - drop OR button to add recipes
Remove recipe from meal plan
Persist meal plan in localStorage
Clear week button

14. Write Comprehensive Documentation

Create a detailed README.md(max 700 words) including:

Project Overview: Brief description of the Recipe App
Features List: All implemented features
Technologies Used: React, React Router, PropTypes, etc.
Component Architecture: Explanation of component structure
Installation Instructions:

npm install

npm start

Project Structure: Folder organization explanation
Component Descriptions: Brief description of each major component
State Management: How state flows through the application
Routing: Explanation of all routes
Future Enhancements: Ideas for additional features
Screenshots: Include 5 + screenshots showing:
Home page
Recipes page with filters
Recipe detail page with video
Meal planner page
Favorites page
Mobile responsive view

Planning Document(Separate File):

Component hierarchy diagram(can be hand - drawn and scanned)
Data flow diagram showing state and props
List of all components with their purposes
Props documentation for main components

Pass Requirements

To pass this capstone, you must achieve "Acceptable"(Level 3) or higher on all 10 rubric criteria:

Component Architecture & Imports - 10 + functional components; proper imports; organized structure
Props Implementation - 10 + props passed; destructuring; validation; children prop; expressions as props
Styling & Design - 3 + styling approaches; responsive; professional design; hover effects
JSX Syntax & Expressions - 10 + embedded expressions; 5 + in attributes; arrow functions; proper syntax
Event Handling - 8 + handlers; 5 + event types; parent - child flow; custom handlers as props
State Management & Hooks - useState in 5 + components; 8 + state variables; useEffect 3 + times; localStorage
Data Flow & Communication - Parent - to - child 5 + times; child - to - parent 3 + times; sibling communication
Conditional Rendering - 5 + ternary operators; 3 + && operators; loading / empty / error states
Media Components & Routing - Video component; audio component; 4 + routes; navigation; active styling
Code Quality & Documentation - Clean code; 15 + comments; no errors; complete README; planning doc

Minimum deliverables for passing:

  10 + functional components(0 class components)
8 + components imported and used
10 + props passed between components
PropTypes in 3 + components
3 + styling approaches demonstrated
10 + JSX expressions and 5 + in attributes
8 + event handlers with 5 + event types
useState in 5 + components, useEffect 3 + times
Parent - child and sibling communication working
5 + ternary operators, 3 + && operators
Video and audio components functional
4 + routes with navigation and 404 page
localStorage for favorites and meal plan
Clean code with 15 + comments
Complete README with screenshots
Planning document with diagrams

Failure to meet Level 3 on any criterion will result in not passing.

Submission Requirements

Your repository must include:

Complete React application with all source files
package.json with all dependencies
All components in organized folder structure
Sample recipe data file
Assets(images, video, audio files) - can use placeholders
README.md with comprehensive documentation
Planning document(PDF or images)
Screenshots folder with required images
  .gitignore file

Submission Instructions

Accept the GitHub Classroom assignment using the link provided by your instructor
Clone your assigned repository to your local machine
Initialize React project: npx create - react - app recipe - app or npm create vite @latest recipe - app-- --template react
Install required dependencies: npm install react - router - dom prop - types
Create component structure following recommended organization
Build features incrementally and test regularly
Commit your work frequently with meaningful commit messages
Push your final code to GitHub before the deadline
Ensure application runs without errors: npm start
Include.env file if needed for any configurations

ChatGPT said:
  Absolutely.This is a large capstone, but the requirements are very explicit, which is actually helpful: we can build the application so that every rubric item is deliberately covered.

I recommend using Vite + React + React Router, with local sample data rather than an external API.That keeps the project reliable and makes it easier to demonstrate the required React concepts.

1. Recommended project architecture
recipe - app /
├── public /
│   └── assets /
│       ├── images /
│       ├── videos /
│       └── audio /
│
├── src /
│   ├── components /
│   │   ├── Navigation /
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.module.css
│   │   │
│   │   ├── Recipe /
│   │   │   ├── RecipeCard.jsx
│   │   │   ├── RecipeList.jsx
│   │   │   ├── RecipeDetail.jsx
│   │   │   ├── RecipeFilter.jsx
│   │   │   └── Recipe.module.css
│   │   │
│   │   ├── MealPlanner /
│   │   │   ├── MealPlanner.jsx
│   │   │   ├── DayCard.jsx
│   │   │   └── MealPlanner.module.css
│   │   │
│   │   ├── Media /
│   │   │   ├── VideoPlayer.jsx
│   │   │   ├── AudioPlayer.jsx
│   │   │   └── Media.module.css
│   │   │
│   │   ├── UI /
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── Loading.jsx
│   │   │   ├── EmptyState.jsx
│   │   │   ├── Modal.jsx
│   │   │   └── UI.module.css
│   │   │
│   │   └── common /
│   │       ├── Header.jsx
│   │       ├── Footer.jsx
│   │       └── common.module.css
│   │
│   ├── pages /
│   │   ├── Home.jsx
│   │   ├── RecipesPage.jsx
│   │   ├── MealPlannerPage.jsx
│   │   ├── FavoritesPage.jsx
│   │   └── NotFound.jsx
│   │
│   ├── data /
│   │   └── recipesData.js
│   │
│   ├── utils /
│   │   └── helpers.js
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── planning - document.md
├── README.md
├── package.json
└── .gitignore

This gives us well over 10 functional components, plenty of reusable components, and the required 3 + levels of nesting.

For example:

App
 └── RecipesPage
      └── RecipeList
           └── RecipeCard
                └── Button

That's four levels of component nesting.

2. Install the project
Open your terminal:

npm create vite @latest recipe - app-- --template react
cd recipe - app
npm install
npm install react - router - dom prop - types
npm run dev

You can then open the local address Vite gives you, normally:

http://localhost:5173

3. How I suggest we build it
Rather than trying to write everything at once, we'll build it in stages and test after each stage.

Stage 1 — Foundation
We'll create:

Vite project
React Router
Global styling
Recipe data
App structure
Navbar
Footer
Pages
Stage 2 — Reusable components
We'll create:

Button
Card
SearchBar
Loading
EmptyState
Modal
Stage 3 — Recipe system
We'll implement:

Recipe cards
Recipe list
Search
Category filtering
Cuisine filtering
Difficulty filtering
Sorting
Recipe detail page
Dynamic / recipes /:id route
Stage 4 — Favorites
We'll implement:

App state
   ↓
favorites
   ↓
RecipeList
   ↓
RecipeCard
   ↓
Favorite button

And persist it with:

localStorage

Stage 5 — Meal planner
We'll create:

Monday
 ├── Breakfast
 ├── Lunch
 └── Dinner

Tuesday
 ├── Breakfast
 ├── Lunch
 └── Dinner

...
Sunday
 ├── Breakfast
 ├── Lunch
 └── Dinner

We'll use buttons rather than drag-and-drop because the instructions explicitly allow either approach.

Stage 6 — Multimedia
We'll add:

HTML5 video
HTML5 audio
Controls
Fallback text
Tutorial section
Cooking tips section
Stage 7 — Responsive design
We'll make it work across:

📱 Mobile
📱 Tablet
💻 Desktop
Stage 8 — Documentation
We'll create:

README.md
planning - document.md
screenshots checklist
component hierarchy diagram
data flow diagram
props documentation
4. Recipe data
We should create 17–20 recipes, because the assignment specifically asks for 15–20.

I'd use approximately:

Category	Number
Breakfast	3
Lunch	4
Dinner	5
Dessert	3
Snacks	2
Total	17

We'll also make sure we have several cuisines:

Italian
Mexican
American
Asian
Mediterranean
Indian
French
Each recipe can contain:

{
  id: 1,
    title: "Classic Spaghetti Carbonara",
      category: "dinner",
        cuisine: "Italian",
          difficulty: "medium",
            prepTime: 10,
              cookTime: 25,
                servings: 4,
                  image: "/assets/images/carbonara.jpg",
                    videoUrl: "/assets/videos/carbonara.mp4",
                      ingredients: [],
                        instructions: []
}

That gives us lots of opportunities for JSX expressions such as:

<h2>{recipe.title}</h2>

<p>{recipe.cuisine}</p>

<p>{formatCookTime(recipe.prepTime + recipe.cookTime)}</p>

<span>{recipe.servings} servings</span>

5. State strategy
The most important shared state should live in App.jsx.

  We'll have approximately:

const [recipes, setRecipes] = useState([]);
const [favorites, setFavorites] = useState([]);
const [mealPlan, setMealPlan] = useState({});
const [searchTerm, setSearchTerm] = useState("");
const [category, setCategory] = useState("all");
const [cuisine, setCuisine] = useState("all");
const [difficulty, setDifficulty] = useState("all");
const [sortBy, setSortBy] = useState("default");
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState("");
const [selectedRecipe, setSelectedRecipe] = useState(null);

That's already 10 state variables.

Shared state will flow down:

App
  |
       ┌─────────────┼──────────────┐
       ↓             ↓              ↓
  RecipesPage   MealPlannerPage  FavoritesPage
       ↓             ↓              ↓
  RecipeList       MealPlanner   RecipeList
       ↓             ↓
  RecipeCard      DayCard

This demonstrates the required lifting state up and sibling communication.

6. localStorage strategy
Favorites:

useEffect(() => {
  const savedFavorites = localStorage.getItem("recipeFavorites");

  if (savedFavorites) {
    setFavorites(JSON.parse(savedFavorites));
  }
}, []);

useEffect(() => {
  localStorage.setItem(
    "recipeFavorites",
    JSON.stringify(favorites)
  );
}, [favorites]);

Meal planner will use the same approach.

This gives us multiple useEffect examples and satisfies the persistence requirement.

7. Props strategy
We'll intentionally make sure the rubric requirements are visible in the code.

For example:

<RecipeCard
  recipe={recipe}
  isFavorite={favorites.some((item) => item.id === recipe.id)}
  onFavoriteToggle={handleFavoriteToggle}
  onViewRecipe={handleViewRecipe}
  compact={false}
/>

That's several props in one component.

And:

<DayCard
  day={day}
  meals={mealPlan[day]}
  recipes={recipes}
  onAddMeal={handleAddMeal}
  onRemoveMeal={handleRemoveMeal}
/>

We'll use callbacks to demonstrate child → parent communication.

8. PropTypes
At least these should have PropTypes:

RecipeCard
RecipeList
DayCard
Button
Modal
For example:

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    cuisine: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    cookTime: PropTypes.number.isRequired,
    image: PropTypes.string
  }).isRequired,

  isFavorite: PropTypes.bool,

  onFavoriteToggle: PropTypes.func.isRequired,

  onViewRecipe: PropTypes.func.isRequired
};

RecipeCard.defaultProps = {
  isFavorite: false
};

That directly addresses the PropTypes /default -props requirements.

9. Conditional rendering
We'll deliberately include enough examples.

For example:

{
  isLoading ? (
    <Loading />
  ) : (
    <RecipeList recipes={filteredRecipes} />
  )
}

{ error && <p className={styles.error}>{error}</p> }

{
  recipes.length === 0 && (
    <EmptyState message="No recipes found." />
  )
}

{
  favorites.length > 0 ? (
    <RecipeList recipes={favorites} />
  ) : (
    <EmptyState message="You haven't saved any recipes yet." />
  )
}

{
  selectedRecipe && (
    <Modal>
      <RecipeDetail recipe={selectedRecipe} />
    </Modal>
  )
}

So the rubric's conditional-rendering requirements will be comfortably exceeded.

10. Event handling
We'll intentionally use more than the required five event types.

For example:

onClick
onChange
onSubmit
onFocus
onBlur
onMouseEnter
onMouseLeave

Search:

<form onSubmit={handleSearchSubmit}>

  Input:

  <input
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    onFocus={handleSearchFocus}
    onBlur={handleSearchBlur}
  />

  Favorite:

  <button onClick={() => onFavoriteToggle(recipe)}>
    ❤️
  </button>

  This gives us plenty of evidence for the event-handling rubric.

  11. Styling strategy
  We'll primarily use CSS Modules, plus inline and conditional styles.

  For example:

  <Button
    variant={isFavorite ? "secondary" : "primary"}
    style={{
      opacity: isLoading ? 0.6 : 1
    }}
  >
    {isFavorite ? "Saved" : "Save Recipe"}
  </Button>

  Conditional classes:

  className={`${styles.card} ${isFavorite ? styles.favorite : ""
    }`}

  We'll have a consistent palette, for example:

  :root {
    --primary: #d97706;
  --primary-dark: #b45309;
  --secondary: #166534;
  --accent: #fef3c7;
  --background: #fffaf5;
  --surface: #ffffff;
  --text: #292524;
  --muted: #78716c;
  --danger: #dc2626;
}

  The design can have a warm cooking/food-blog aesthetic rather than looking like a generic student project.

  12. Routing
  We'll implement:

  /
  ├── /recipes
  ├── /recipes/:id
  ├── /meal-planner
  ├── /favorites
  └── *

  So:

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/recipes" element={<RecipesPage />} />
    <Route path="/recipes/:id" element={<RecipeDetail />} />
    <Route path="/meal-planner" element={<MealPlannerPage />} />
    <Route path="/favorites" element={<FavoritesPage />} />
    <Route path="*" element={<NotFound />} />
  </Routes>

  We'll also use:

  const navigate = useNavigate();

  for programmatic navigation.

  13. Media
  The recipe detail page will contain something like:

  <VideoPlayer
    videoUrl={recipe.videoUrl}
    title={`${recipe.title} Cooking Tutorial`}
  />

  and:

  <video controls>
    <source src={videoUrl} type="video/mp4" />
    Your browser does not support HTML5 video.
  </video>

  The home page can have:

  <AudioPlayer
    audioUrl="/assets/audio/cooking-tips.mp3"
    title="Chef's Cooking Tips"
  />

  with:

  <audio controls>
    <source src={audioUrl} type="audio/mpeg" />
    Your browser does not support the audio element.
  </audio>

  That satisfies the HTML5 multimedia requirement.

  14. One important point about the assets
  You don't need to produce professional cooking videos yourself.

  We can structure the project so that the application works with local placeholder assets:

  public/assets/
  ├── images/
  │   ├── carbonara.jpg
  │   ├── pancakes.jpg
  │   └── ...
  ├── videos/
  │   └── cooking-tutorial.mp4
  └── audio/
  └── cooking-tips.mp3

  If you don't have media files, we can initially use placeholder files/URLs during development and then replace them before submission.

  15. Planning document
  Your planning-document.md can be kept under the 400-word requirement and contain:

  Component hierarchy
  App
  ├── Navbar
  ├── Header
  ├── Routes
  │   ├── Home
  │   │   ├── Card
  │   │   └── AudioPlayer
  │   ├── RecipesPage
  │   │   ├── SearchBar
  │   │   ├── RecipeFilter
  │   │   └── RecipeList
  │   │       └── RecipeCard
  │   │           └── Button
  │   ├── RecipeDetail
  │   │   ├── Card
  │   │   ├── VideoPlayer
  │   │   └── Button
  │   ├── MealPlannerPage
  │   │   └── MealPlanner
  │   │       └── DayCard
  │   └── FavoritesPage
  │       └── RecipeList
  └── Footer

  Data flow
  recipesData
  ↓
  App
  ↓
  ┌───┴────────────┐
  ↓                ↓
  Recipes       Meal Planner
  ↓                ↓
  RecipeList      DayCard
  ↓
  RecipeCard

  State
  App
  ├── recipes
  ├── favorites
  ├── mealPlan
  ├── filters
  ├── loading
  ├── error
  └── selectedRecipe

  16. README
  The README needs to stay under 700 words, so we'll make it concise rather than writing a huge document.

  It should include:

  Project overview
  Features
  Technologies
  Installation
  Folder structure
  Component architecture
  State management
  Routes
  Future enhancements
  Screenshots
  For screenshots, we'll eventually capture:

  Home
  Recipes + filters
  Recipe detail + video
  Meal planner
  Favorites
  Mobile layout
  17. Rubric checklist
  We'll build against the rubric rather than hoping we happen to satisfy it.

  Requirement	Target
  Functional components	20+
  Class components	0
  Reusable components	8+
  Prop examples	20+
  PropTypes	5
  useState components	5+
  State variables	10+
  useEffect	5+
  JSX expressions	20+
  Attribute expressions	10+
  Arrow functions	10+
  Ternaries	8+
  && renders	5+
  .map() lists	5+
  Event handlers	15+
  Event types	7
  Routes	6
  Media components	2
  localStorage features	2
  Code comments	20+

  That gives us a safety margin rather than targeting the minimum exactly.

  Best next step
  I suggest we build this together file by file, starting with the actual working application rather than writing a theoretical solution.

  Next, we should create the Vite project and then build src/data/recipesData.js, src/App.jsx, src/main.jsx, and the initial folder structure. After that we can move through the components and features systematically, checking each rubric requirement as we go.



  Log in to create and download files for free.


  Log in

  Sign up for free
  You said:

  I will post my progress, please help me finish the code. In each and every block please write me a commit message e.g git commit -m "Message here"

  App.js:
  import {BrowserRouter, Routes, Route} from 'react-router-dom';
  import Navbar from './components/Navigation/Navbar';

  import Home from './pages/Home';
  import RecipesPage from './pages/RecipesPage';
  import RecipeDetailPage from './pages/RecipeDetailPage';
  import MealPlannerPage from './pages/MealPlannerPage';
  import FavoritesPage from './pages/FavoritesPage';
  import NotFound from './pages/NotFound';

  import {recipesData} from './data/recipesData';

  function App() {
  // Favorites are stored in the parent so multiple pages can use the same state.
  const [favorites, setFavorites] = useState([]);

  // Meal planner state is also lifted to App because several components will use it.
  const [mealPlan, setMealPlan] = useState({
    monday: {breakfast: null, lunch: null, dinner: null },
  tuesday: {breakfast: null, lunch: null, dinner: null },
  wednesday: {breakfast: null, lunch: null, dinner: null },
  thursday: {breakfast: null, lunch: null, dinner: null },
  friday: {breakfast: null, lunch: null, dinner: null },
  saturday: {breakfast: null, lunch: null, dinner: null },
  sunday: {breakfast: null, lunch: null, dinner: null },
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
  { }
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

  App.css:
  .counter {
    font - size: 16px;
  padding: 5px 10px;
  border-radius: 5px;
  color: var(--accent);
  background: var(--accent-bg);
  border: 2px solid transparent;
  transition: border-color 0.3s;
  margin-bottom: 24px;

  &:hover {
    border - color: var(--accent-border);
  }
  &:focus-visible {
    outline: 2px solid var(--accent);
  outline-offset: 2px;
  }
}

  .hero {
    position: relative;

  .base,
  .framework,
  .vite {
    inset - inline: 0;
  margin: 0 auto;
  }

  .base {
    width: 170px;
  position: relative;
  z-index: 0;
  }

  .framework,
  .vite {
    position: absolute;
  }

  .framework {
    z - index: 1;
  top: 34px;
  height: 28px;
  transform: perspective(2000px) rotateZ(300deg) rotateX(44deg) rotateY(39deg)
  scale(1.4);
  }

  .vite {
    z - index: 0;
  top: 107px;
  height: 26px;
  width: auto;
  transform: perspective(2000px) rotateZ(300deg) rotateX(40deg) rotateY(39deg)
  scale(0.8);
  }
}

  #center {
    display: flex;
  flex-direction: column;
  gap: 25px;
  place-content: center;
  place-items: center;
  flex-grow: 1;

  @media (max-width: 1024px) {
    padding: 32px 20px 24px;
  gap: 18px;
  }
}

  #next-steps {
    display: flex;
  border-top: 1px solid var(--border);
  text-align: left;

  & > div {
    flex: 1 1 0;
  padding: 32px;
  @media (max-width: 1024px) {
    padding: 24px 20px;
    }
  }

  .icon {
    margin - bottom: 16px;
  width: 22px;
  height: 22px;
  }

  @media (max-width: 1024px) {
    flex - direction: column;
  text-align: center;
  }
}

  #docs {
    border - right: 1px solid var(--border);

  @media (max-width: 1024px) {
    border - right: none;
  border-bottom: 1px solid var(--border);
  }
}

  #next-steps ul {
    list - style: none;
  padding: 0;
  display: flex;
  gap: 8px;
  margin: 32px 0 0;

  .logo {
    height: 18px;
  }

  a {
    color: var(--text-h);
  font-size: 16px;
  border-radius: 6px;
  background: var(--social-bg);
  display: flex;
  padding: 6px 12px;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  transition: box-shadow 0.3s;

  &:hover {
    box - shadow: var(--shadow);
    }
  .button-icon {
    height: 18px;
  width: 18px;
    }
  }

  @media (max-width: 1024px) {
    margin - top: 20px;
  flex-wrap: wrap;
  justify-content: center;

  li {
    flex: 1 1 calc(50% - 8px);
    }

  a {
    width: 100%;
  justify-content: center;
  box-sizing: border-box;
    }
  }
}

  #spacer {
    height: 88px;
  border-top: 1px solid var(--border);
  @media (max-width: 1024px) {
    height: 48px;
  }
}

  .ticks {
    position: relative;
  width: 100%;

  &::before,
  &::after {
    content: '';
  position: absolute;
  top: -4.5px;
  border: 5px solid transparent;
  }

  &::before {
    left: 0;
  border-left-color: var(--border);
  }
  &::after {
    right: 0;
  border-right-color: var(--border);
  }
}

  Home.jsx:
const Home = () => {
  return (
  <main>
    <h1>Welcome to Savora</h1>
    <p>Discover delicious recipes and plan your meals.</p>
  </main>
  );
};

  export default Home;

  RecipeDetailPage:
const RecipeDetailPage = () => {
  return (
  <main>
    <h1>Recipe Details</h1>
    <p>Recipe information will appear here.</p>
  </main>
  );
};

  export default RecipeDetailPage;


  MealPlannerPage:
const MealPlannerPage = () => {
  return (
  <main>
    <h1>Meal Planner</h1>
    <p>Plan your meals for the week.</p>
  </main>
  );
};

  export default MealPlannerPage;

  FavoritesPage:
const FavoritesPage = () => {
  return (
  <main>
    <h1>Favorites</h1>
    <p>Your favorite recipes will appear here.</p>
  </main>
  );
};

  export default FavoritesPage;

  recipesData.js:
  export const recipesData = [
  // =========================
  // BREAKFAST RECIPES
  // =========================
  {
    id: 1,
  title: "Classic Pancakes",
  category: "breakfast",
  cuisine: "American",
  difficulty: "easy",
  prepTime: 10,
  cookTime: 15,
  servings: 4,
  image: "/assets/images/pancakes.jpg",
  videoUrl: "/assets/videos/pancakes.mp4",
  audioUrl: "/assets/audio/breakfast-tips.mp3",
  ingredients: [
  "2 cups all-purpose flour",
  "2 tablespoons sugar",
  "2 teaspoons baking powder",
  "1/2 teaspoon salt",
  "2 eggs",
  "1 3/4 cups milk",
  "2 tablespoons melted butter"
  ],
  instructions: [
  "Mix the flour, sugar, baking powder, and salt in a bowl.",
  "Whisk the eggs, milk, and melted butter in a separate bowl.",
  "Combine the wet and dry ingredients until just mixed.",
  "Heat a lightly buttered pan over medium heat.",
  "Pour batter into the pan and cook until bubbles form.",
  "Flip and cook until golden brown."
  ]
    },

  {
    id: 2,
  title: "Avocado Toast",
  category: "breakfast",
  cuisine: "American",
  difficulty: "easy",
  prepTime: 5,
  cookTime: 5,
  servings: 2,
  image: "/assets/images/avocado-toast.jpg",
  videoUrl: "/assets/videos/avocado-toast.mp4",
  audioUrl: "/assets/audio/breakfast-tips.mp3",
  ingredients: [
  "2 slices sourdough bread",
  "1 ripe avocado",
  "1 tablespoon lemon juice",
  "Salt",
  "Black pepper",
  "Red pepper flakes"
  ],
  instructions: [
  "Toast the sourdough bread until golden.",
  "Mash the avocado with lemon juice.",
  "Season the avocado with salt and pepper.",
  "Spread the avocado over the toast.",
  "Sprinkle with red pepper flakes and serve."
  ]
    },

  {
    id: 3,
  title: "Berry Yogurt Bowl",
  category: "breakfast",
  cuisine: "Mediterranean",
  difficulty: "easy",
  prepTime: 5,
  cookTime: 0,
  servings: 2,
  image: "/assets/images/yogurt-bowl.jpg",
  videoUrl: "/assets/videos/yogurt-bowl.mp4",
  audioUrl: "/assets/audio/breakfast-tips.mp3",
  ingredients: [
  "2 cups Greek yogurt",
  "1 cup mixed berries",
  "1/2 cup granola",
  "1 tablespoon honey",
  "1 tablespoon chopped almonds"
  ],
  instructions: [
  "Divide the Greek yogurt between two bowls.",
  "Add the mixed berries.",
  "Top with granola and chopped almonds.",
  "Drizzle with honey and serve."
  ]
    },

  // =========================
  // LUNCH RECIPES
  // =========================
  {
    id: 4,
  title: "Chicken Caesar Salad",
  category: "lunch",
  cuisine: "American",
  difficulty: "easy",
  prepTime: 15,
  cookTime: 10,
  servings: 2,
  image: "/assets/images/caesar-salad.jpg",
  videoUrl: "/assets/videos/caesar-salad.mp4",
  audioUrl: "/assets/audio/lunch-tips.mp3",
  ingredients: [
  "2 chicken breasts",
  "1 romaine lettuce",
  "1/2 cup Parmesan cheese",
  "1/2 cup croutons",
  "1/3 cup Caesar dressing"
  ],
  instructions: [
  "Season and grill the chicken breasts.",
  "Chop the romaine lettuce.",
  "Slice the cooked chicken.",
  "Combine lettuce, chicken, Parmesan, and croutons.",
  "Add Caesar dressing and toss before serving."
  ]
    },

  {
    id: 5,
  title: "Chicken Tacos",
  category: "lunch",
  cuisine: "Mexican",
  difficulty: "easy",
  prepTime: 15,
  cookTime: 15,
  servings: 4,
  image: "/assets/images/chicken-tacos.jpg",
  videoUrl: "/assets/videos/chicken-tacos.mp4",
  audioUrl: "/assets/audio/lunch-tips.mp3",
  ingredients: [
  "500g chicken breast",
  "8 taco shells",
  "1 tomato",
  "1/2 onion",
  "1 cup shredded lettuce",
  "1/2 cup grated cheese",
  "Taco seasoning"
  ],
  instructions: [
  "Cut the chicken into small pieces.",
  "Season the chicken with taco seasoning.",
  "Cook the chicken in a hot pan.",
  "Prepare the tomato, onion, and lettuce.",
  "Fill taco shells with chicken and vegetables.",
  "Top with cheese and serve."
  ]
    },

  {
    id: 6,
  title: "Creamy Tomato Soup",
  category: "lunch",
  cuisine: "American",
  difficulty: "easy",
  prepTime: 10,
  cookTime: 25,
  servings: 4,
  image: "/assets/images/tomato-soup.jpg",
  videoUrl: "/assets/videos/tomato-soup.mp4",
  audioUrl: "/assets/audio/lunch-tips.mp3",
  ingredients: [
  "800g canned tomatoes",
  "1 onion",
  "2 garlic cloves",
  "2 cups vegetable stock",
  "1/2 cup cream",
  "1 tablespoon olive oil"
  ],
  instructions: [
  "Heat olive oil in a large pot.",
  "Cook the onion and garlic until soft.",
  "Add the tomatoes and vegetable stock.",
  "Simmer for 20 minutes.",
  "Blend until smooth.",
  "Stir in the cream and serve."
  ]
    },

  {
    id: 7,
  title: "Greek Chicken Wrap",
  category: "lunch",
  cuisine: "Mediterranean",
  difficulty: "easy",
  prepTime: 15,
  cookTime: 10,
  servings: 2,
  image: "/assets/images/greek-wrap.jpg",
  videoUrl: "/assets/videos/greek-wrap.mp4",
  audioUrl: "/assets/audio/lunch-tips.mp3",
  ingredients: [
  "2 flatbreads",
  "2 chicken breasts",
  "1 tomato",
  "1/2 cucumber",
  "1/2 cup Greek yogurt",
  "Feta cheese",
  "Mixed herbs"
  ],
  instructions: [
  "Season and cook the chicken.",
  "Slice the chicken and vegetables.",
  "Spread Greek yogurt over each flatbread.",
  "Add chicken, vegetables, and feta.",
  "Roll the flatbread tightly and serve."
  ]
    },

  // =========================
  // DINNER RECIPES
  // =========================
  {
    id: 8,
  title: "Classic Spaghetti Carbonara",
  category: "dinner",
  cuisine: "Italian",
  difficulty: "medium",
  prepTime: 10,
  cookTime: 25,
  servings: 4,
  image: "/assets/images/carbonara.jpg",
  videoUrl: "/assets/videos/carbonara.mp4",
  audioUrl: "/assets/audio/dinner-tips.mp3",
  ingredients: [
  "400g spaghetti",
  "200g pancetta",
  "4 egg yolks",
  "100g Parmesan cheese",
  "Black pepper",
  "Salt"
  ],
  instructions: [
  "Cook the spaghetti according to the package instructions.",
  "Fry the pancetta until crispy.",
  "Mix the egg yolks with Parmesan cheese.",
  "Combine the hot pasta with the pancetta.",
  "Add the egg mixture and toss quickly.",
  "Season with black pepper and serve."
  ]
    },

  {
    id: 9,
  title: "Beef Stir Fry",
  category: "dinner",
  cuisine: "Asian",
  difficulty: "medium",
  prepTime: 15,
  cookTime: 15,
  servings: 4,
  image: "/assets/images/beef-stir-fry.jpg",
  videoUrl: "/assets/videos/beef-stir-fry.mp4",
  audioUrl: "/assets/audio/dinner-tips.mp3",
  ingredients: [
  "500g beef strips",
  "1 bell pepper",
  "1 carrot",
  "1 broccoli head",
  "3 tablespoons soy sauce",
  "1 tablespoon sesame oil"
  ],
  instructions: [
  "Slice the vegetables into thin pieces.",
  "Heat sesame oil in a large pan.",
  "Cook the beef until browned.",
  "Add the vegetables.",
  "Pour in the soy sauce.",
  "Stir-fry until the vegetables are tender."
  ]
    },

  {
    id: 10,
  title: "Chicken Parmesan",
  category: "dinner",
  cuisine: "Italian",
  difficulty: "medium",
  prepTime: 20,
  cookTime: 30,
  servings: 4,
  image: "/assets/images/chicken-parmesan.jpg",
  videoUrl: "/assets/videos/chicken-parmesan.mp4",
  audioUrl: "/assets/audio/dinner-tips.mp3",
  ingredients: [
  "4 chicken breasts",
  "1 cup breadcrumbs",
  "1 cup Parmesan cheese",
  "2 cups tomato sauce",
  "1 cup mozzarella",
  "2 eggs"
  ],
  instructions: [
  "Flatten the chicken breasts.",
  "Coat the chicken in beaten egg.",
  "Cover with breadcrumbs and Parmesan.",
  "Cook the chicken until golden.",
  "Top with tomato sauce and mozzarella.",
  "Bake until the cheese melts."
  ]
    },

  {
    id: 11,
  title: "Beef Burgers",
  category: "dinner",
  cuisine: "American",
  difficulty: "easy",
  prepTime: 15,
  cookTime: 15,
  servings: 4,
  image: "/assets/images/beef-burgers.jpg",
  videoUrl: "/assets/videos/beef-burgers.mp4",
  audioUrl: "/assets/audio/dinner-tips.mp3",
  ingredients: [
  "500g ground beef",
  "4 burger buns",
  "4 lettuce leaves",
  "1 tomato",
  "4 cheese slices",
  "Salt",
  "Black pepper"
  ],
  instructions: [
  "Divide the beef into four portions.",
  "Shape each portion into a burger patty.",
  "Season with salt and pepper.",
  "Cook the patties to your preferred doneness.",
  "Toast the buns.",
  "Assemble the burgers with lettuce, tomato, and cheese."
  ]
    },

  {
    id: 12,
  title: "Vegetable Curry",
  category: "dinner",
  cuisine: "Indian",
  difficulty: "medium",
  prepTime: 15,
  cookTime: 30,
  servings: 4,
  image: "/assets/images/vegetable-curry.jpg",
  videoUrl: "/assets/videos/vegetable-curry.mp4",
  audioUrl: "/assets/audio/dinner-tips.mp3",
  ingredients: [
  "1 potato",
  "1 carrot",
  "1 bell pepper",
  "1 onion",
  "400ml coconut milk",
  "2 tablespoons curry powder",
  "1 tablespoon vegetable oil"
  ],
  instructions: [
  "Chop all vegetables into bite-sized pieces.",
  "Heat oil and cook the onion.",
  "Add curry powder and stir.",
  "Add the vegetables and coconut milk.",
  "Simmer until the vegetables are tender.",
  "Serve with rice."
  ]
    },

  // =========================
  // DESSERT RECIPES
  // =========================
  {
    id: 13,
  title: "Chocolate Brownies",
  category: "dessert",
  cuisine: "American",
  difficulty: "easy",
  prepTime: 15,
  cookTime: 25,
  servings: 12,
  image: "/assets/images/brownies.jpg",
  videoUrl: "/assets/videos/brownies.mp4",
  audioUrl: "/assets/audio/dessert-tips.mp3",
  ingredients: [
  "200g dark chocolate",
  "150g butter",
  "200g sugar",
  "3 eggs",
  "100g flour",
  "1 teaspoon vanilla extract"
  ],
  instructions: [
  "Melt the chocolate and butter together.",
  "Whisk the eggs, sugar, and vanilla.",
  "Combine the chocolate mixture with the eggs.",
  "Fold in the flour.",
  "Pour into a lined baking tray.",
  "Bake until set and allow to cool."
  ]
    },

  {
    id: 14,
  title: "Strawberry Cheesecake",
  category: "dessert",
  cuisine: "American",
  difficulty: "hard",
  prepTime: 30,
  cookTime: 45,
  servings: 8,
  image: "/assets/images/cheesecake.jpg",
  videoUrl: "/assets/videos/cheesecake.mp4",
  audioUrl: "/assets/audio/dessert-tips.mp3",
  ingredients: [
  "200g digestive biscuits",
  "100g melted butter",
  "500g cream cheese",
  "150g sugar",
  "2 eggs",
  "1 cup strawberries"
  ],
  instructions: [
  "Crush the biscuits and mix with melted butter.",
  "Press the mixture into a cake tin.",
  "Beat the cream cheese and sugar.",
  "Add the eggs and mix.",
  "Pour over the biscuit base.",
  "Bake and allow to cool before adding strawberries."
  ]
    },

  {
    id: 15,
  title: "Apple Crumble",
  category: "dessert",
  cuisine: "British",
  difficulty: "easy",
  prepTime: 15,
  cookTime: 35,
  servings: 6,
  image: "/assets/images/apple-crumble.jpg",
  videoUrl: "/assets/videos/apple-crumble.mp4",
  audioUrl: "/assets/audio/dessert-tips.mp3",
  ingredients: [
  "5 apples",
  "100g flour",
  "75g butter",
  "75g brown sugar",
  "1 teaspoon cinnamon"
  ],
  instructions: [
  "Peel and slice the apples.",
  "Place the apples in a baking dish.",
  "Mix flour, butter, sugar, and cinnamon.",
  "Sprinkle the crumble mixture over the apples.",
  "Bake until golden and bubbling."
  ]
    },

  // =========================
  // SNACK RECIPES
  // =========================
  {
    id: 16,
  title: "Guacamole and Tortilla Chips",
  category: "snacks",
  cuisine: "Mexican",
  difficulty: "easy",
  prepTime: 10,
  cookTime: 0,
  servings: 4,
  image: "/assets/images/guacamole.jpg",
  videoUrl: "/assets/videos/guacamole.mp4",
  audioUrl: "/assets/audio/snack-tips.mp3",
  ingredients: [
  "2 ripe avocados",
  "1 tomato",
  "1/2 onion",
  "1 lime",
  "Salt",
  "Tortilla chips"
  ],
  instructions: [
  "Mash the avocados in a bowl.",
  "Dice the tomato and onion.",
  "Mix the vegetables into the avocado.",
  "Add lime juice and salt.",
  "Serve with tortilla chips."
  ]
    },

  {
    id: 17,
  title: "Cinnamon Popcorn",
  category: "snacks",
  cuisine: "American",
  difficulty: "easy",
  prepTime: 5,
  cookTime: 10,
  servings: 4,
  image: "/assets/images/cinnamon-popcorn.jpg",
  videoUrl: "/assets/videos/cinnamon-popcorn.mp4",
  audioUrl: "/assets/audio/snack-tips.mp3",
  ingredients: [
  "1/2 cup popcorn kernels",
  "2 tablespoons butter",
  "2 tablespoons sugar",
  "1 teaspoon cinnamon"
  ],
  instructions: [
  "Pop the popcorn kernels in a covered pot.",
  "Melt the butter.",
  "Mix sugar and cinnamon with the butter.",
  "Pour the mixture over the popcorn.",
  "Toss well and serve."
  ]
    },

  {
    id: 18,
  title: "Bruschetta",
  category: "snacks",
  cuisine: "Italian",
  difficulty: "easy",
  prepTime: 10,
  cookTime: 5,
  servings: 4,
  image: "/assets/images/bruschetta.jpg",
  videoUrl: "/assets/videos/bruschetta.mp4",
  audioUrl: "/assets/audio/snack-tips.mp3",
  ingredients: [
  "1 baguette",
  "3 tomatoes",
  "2 garlic cloves",
  "2 tablespoons olive oil",
  "Fresh basil",
  "Salt"
  ],
  instructions: [
  "Slice the baguette and toast the slices.",
  "Dice the tomatoes.",
  "Mix tomatoes with basil, olive oil, and salt.",
  "Rub toasted bread with garlic.",
  "Top the bread with the tomato mixture.",
  "Serve immediately."
  ]
    }
  ];

  Button.jsx:
  import PropTypes from 'prop-types';

  const Button = ({
    children,
    variant = 'primary',
    onClick,
    type = 'button',
}) => {
  return (
  <button
    type={type}
    className={`button button-${variant}`}
    onClick={onClick}
  >
    {children}
  </button>
  );
};

  Button.propTypes = {
    children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

  export default Button;

  Loading.jsx:
  const Loading = ({message = 'Loading recipes...'}) => {
  return (
  <div className="loading">
    <div className="spinner"></div>

    <p>{message}</p>
  </div>
  );
};

  export default Loading;

  RecipesCard.jsx:
  import PropTypes from 'prop-types';
  import {Link} from 'react-router-dom';
  import Button from '../UI/Button';
  import Card from '../UI/Card';

  const RecipeCard = ({
    recipe,
    isFavorite = false,
    onFavoriteToggle,
}) => {
  const totalTime = recipe.prepTime + recipe.cookTime;

  return (
  <Card>
    <img
      src={recipe.image}
      alt={recipe.title}
      className="recipe-image"
    />

    <h2>{recipe.title}</h2>

    <p>
      Cuisine: {recipe.cuisine}
    </p>

    <p>
      Difficulty: {recipe.difficulty}
    </p>

    <p>
      Total Time: {totalTime} minutes
    </p>

    <p>
      Servings: {recipe.servings}
    </p>

    <div>
      <Link to={`/recipes/${recipe.id}`}>
        View Recipe
      </Link>

      <Button
        variant={isFavorite ? 'danger' : 'secondary'}
        onClick={() => onFavoriteToggle(recipe)}
      >
        {isFavorite ? '♥ Remove Favorite' : '♡ Add Favorite'}
      </Button>
    </div>
  </Card>
  );
};

  RecipeCard.propTypes = {
    recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  cuisine: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  prepTime: PropTypes.number.isRequired,
  cookTime: PropTypes.number.isRequired,
  servings: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  }).isRequired,
  isFavorite: PropTypes.bool,
  onFavoriteToggle: PropTypes.func.isRequired,
};

  export default RecipeCard;

  RecipeList.jsx:
  import PropTypes from 'prop-types';
  import RecipeCard from './RecipeCard';

  const RecipeList = ({
    recipes,
    favorites = [],
    onFavoriteToggle,
}) => {
  return (
  <div className="recipe-list">
    {recipes.map((recipe) => (
      <RecipeCard
        key={recipe.id}
        recipe={recipe}
        isFavorite={favorites.some(
          (favorite) => favorite.id === recipe.id
        )}
        onFavoriteToggle={onFavoriteToggle}
      />
    ))}
  </div>
  );
};

  RecipeList.propTypes = {
    recipes: PropTypes.arrayOf(
  PropTypes.object
  ).isRequired,
  favorites: PropTypes.arrayOf(
  PropTypes.object
  ),
  onFavoriteToggle: PropTypes.func.isRequired,
};

  export default RecipeList;

  Modal.jsx:
  import PropTypes from 'prop-types';

  const Modal = ({
    children,
    title = 'Recipe Information',
    onClose,
}) => {
  return (
  <div className="modal-overlay">
    <div className="modal">
      <div className="modal-header">
        <h2>{title}</h2>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>
      </div>

      <div className="modal-content">
        {children}
      </div>
    </div>
  </div>
  );
};

  Modal.propTypes = {
    children: PropTypes.node.isRequired,
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

  export default Modal;

  Card.jsx:
  import PropTypes from 'prop-types';

  const Card = ({children, title, className = ''}) => {
  return (
  <section className={`card ${className}`}>
    {title && <h3>{title}</h3>}

    <div className="card-content">
      {children}
    </div>
  </section>
  );
};

  Card.propTypes = {
    children: PropTypes.node.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
};

  export default Card;

  SearchBar.jsx:
  import PropTypes from 'prop-types';

  const SearchBar = ({
    searchTerm,
    onSearch,
    placeholder = 'Search recipes...',
}) => {
  return (
  <form onSubmit={(e) => e.preventDefault()}>
    <label htmlFor="recipe-search">
      Search recipes
    </label>

    <input
      id="recipe-search"
      type="text"
      value={searchTerm}
      placeholder={placeholder}
      onChange={(e) => onSearch(e.target.value)}
    />
  </form>
  );
};

  SearchBar.propTypes = {
    searchTerm: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

  export default SearchBar;


  RecipesPage.jsx:
  import {useState} from 'react';
  import PropTypes from 'prop-types';

  import {recipesData} from '../data/recipesData';
  import SearchBar from '../components/UI/SearchBar';
  import RecipeList from '../components/Recipe/RecipeList';
  import Loading from '../components/UI/Loading';

  const RecipesPage = ({
    recipes,
    favorites,
    onFavoriteToggle,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCuisine, setSelectedCuisine] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [sortOption, setSortOption] = useState('title');
  const [isLoading] = useState(false);

  // Filter and sort the recipe data whenever the user's selections change.
  const filteredRecipes = useMemo(() => {
    const filtered = recipes.filter((recipe) => {
      const matchesSearch = recipe.title
  .toLowerCase()
  .includes(searchTerm.toLowerCase());

  const matchesCategory =
  selectedCategory === 'all' ||
  recipe.category === selectedCategory;

  const matchesCuisine =
  selectedCuisine === 'all' ||
  recipe.cuisine === selectedCuisine;

  const matchesDifficulty =
  selectedDifficulty === 'all' ||
  recipe.difficulty === selectedDifficulty;

  return (
  matchesSearch &&
  matchesCategory &&
  matchesCuisine &&
  matchesDifficulty
  );
    });

    return [...filtered].sort((a, b) => {
      if (sortOption === 'title') {
        return a.title.localeCompare(b.title);
      }

  if (sortOption === 'cookTime') {
        return a.cookTime - b.cookTime;
      }

  if (sortOption === 'difficulty') {
        return a.difficulty.localeCompare(b.difficulty);
      }

  return 0;
    });
  }, [
  recipes,
  searchTerm,
  selectedCategory,
  selectedCuisine,
  selectedDifficulty,
  sortOption,
  ]);

  const handleClearFilters = () => {
    setSearchTerm('');
  setSelectedCategory('all');
  setSelectedCuisine('all');
  setSelectedDifficulty('all');
  setSortOption('title');
  };

  return (
  <main className="page-container">
    <header className="page-header">
      <h1>Discover Recipes</h1>

      <p>
        Explore delicious recipes for every meal and occasion.
      </p>
    </header>

    <SearchBar
      searchTerm={searchTerm}
      onSearch={setSearchTerm}
      placeholder='Search by recipe name...'
    />

    <RecipeFilter
      category={selectedCategory}
      cuisine={selectedCuisine}
      difficulty={selectedDifficulty}
      sortOption
    </main>
  )


  Navbar.jsx:
  import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
  <nav>
    <h1>Savora</h1>

    <NavLink to="/">Home</NavLink>
    <NavLink to="/recipes">Recipes</NavLink>
    <NavLink to="/meal-planner">Meal Planner</NavLink>
    <NavLink to="/favorites">Favorites</NavLink>
  </nav>
  );
};

  export default Navbar;

  ChatGPT said:
  Yes — post your progress like this as you go, and I’ll help you finish it incrementally without losing the rubric requirements.

  I can already see several issues that will prevent the current project from compiling. The biggest ones are:

  useState and useEffect are missing from App.js.
  useMemo is missing from RecipesPage.jsx.
  RecipeFilter is being used but hasn't been imported/created.
  RecipesPage.jsx is incomplete and has no closing JSX.
  You have the /recipes route twice.
  Navbar doesn't currently accept favoriteCount.
  RecipeCard needs to actually be named RecipeCard.jsx if that's what you're importing.
  Home, RecipeDetailPage, MealPlannerPage, and FavoritesPage are still placeholders.
  Your old Vite App.css should be replaced rather than kept.
  We need to start deliberately satisfying the rubric rather than just making the app compile.
  Let's fix this in a sensible order.

  Step 1 — Fix App.jsx
  Replace your current App.js with this.

  Important: If your file is actually called App.js, that's fine. If you're using App.jsx, use that instead.

  import {useEffect, useState} from 'react';
  import {BrowserRouter, Routes, Route} from 'react-router-dom';

  import Navbar from './components/Navigation/Navbar';

  import Home from './pages/Home';
  import RecipesPage from './pages/RecipesPage';
  import RecipeDetailPage from './pages/RecipeDetailPage';
  import MealPlannerPage from './pages/MealPlannerPage';
  import FavoritesPage from './pages/FavoritesPage';
  import NotFound from './pages/NotFound';

  import {recipesData} from './data/recipesData';

  function App() {
  // Favorites are kept in App so the Navbar, recipe pages, and Favorites page
  // can all access the same source of truth.
  const [favorites, setFavorites] = useState([]);

  // Meal planner state is lifted to App because several pages need access to it.
  const [mealPlan, setMealPlan] = useState({
    monday: {breakfast: null, lunch: null, dinner: null },
  tuesday: {breakfast: null, lunch: null, dinner: null },
  wednesday: {breakfast: null, lunch: null, dinner: null },
  thursday: {breakfast: null, lunch: null, dinner: null },
  friday: {breakfast: null, lunch: null, dinner: null },
  saturday: {breakfast: null, lunch: null, dinner: null },
  sunday: {breakfast: null, lunch: null, dinner: null },
  });

  // Load saved data from localStorage when the application first mounts.
  useEffect(() => {
    try {
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

  // Persist favorites whenever the favorites array changes.
  useEffect(() => {
    localStorage.setItem(
      'savoraFavorites',
      JSON.stringify(favorites)
    );
  }, [favorites]);

  // Persist the meal planner whenever the weekly plan changes.
  useEffect(() => {
    localStorage.setItem(
      'savoraMealPlan',
      JSON.stringify(mealPlan)
    );
  }, [mealPlan]);

  // Toggle a recipe between the favorites collection and the normal recipe list.
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

  // Add a recipe to a particular day and meal slot.
  const handleAddToMealPlan = (day, meal, recipe) => {
    setMealPlan((currentMealPlan) => ({
      ...currentMealPlan,
      [day]: {
        ...currentMealPlan[day],
        [meal]: recipe,
      },
    }));
  };

  // Remove a recipe from a particular meal slot.
  const handleRemoveFromMealPlan = (day, meal) => {
    setMealPlan((currentMealPlan) => ({
      ...currentMealPlan,
      [day]: {
        ...currentMealPlan[day],
        [meal]: null,
      },
    }));
  };

  // Reset every meal slot to null while preserving all seven days.
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
  { }
  );

  setMealPlan(emptyPlan);
  };

  return (
  <BrowserRouter>
    <Navbar favoriteCount={favorites.length} />

    <Routes>
      <Route
        path="/"
        element={<Home recipes={recipesData} />}
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

      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  </BrowserRouter>
  );
}

  export default App;

  Commit
  git add src/App.js
  git commit -m "Fix App state management and routing"

  Step 2 — Fix RecipeCard.jsx
  You currently called the file RecipesCard.jsx, but RecipeList.jsx imports:

  import RecipeCard from './RecipeCard';

  That will cause an import error on case-sensitive systems.

  Rename the file to:

  RecipeCard.jsx

  Then use this version:

  import PropTypes from 'prop-types';
  import {Link} from 'react-router-dom';

  import Button from '../UI/Button';
  import Card from '../UI/Card';

  const RecipeCard = ({
    recipe,
    isFavorite = false,
    onFavoriteToggle,
}) => {
  // Calculate the total preparation and cooking time before rendering.
  const totalTime = recipe.prepTime + recipe.cookTime;

  // Convert the difficulty into a visual indicator for the card.
  const difficultyIcon =
  recipe.difficulty === 'easy'
  ? '🟢'
  : recipe.difficulty === 'medium'
  ? '🟡'
  : '🔴';

  return (
  <Card className={isFavorite ? 'favorite-card' : ''}>
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
        <strong>Difficulty:</strong>{' '}
        {difficultyIcon} {recipe.difficulty}
      </p>

      <p>
        <strong>Total Time:</strong> {totalTime} minutes
      </p>

      <p>
        <strong>Servings:</strong> {recipe.servings}
      </p>

      <div className="recipe-card-actions">
        <Link
          to={`/recipes/${recipe.id}`}
          className="button button-primary"
        >
          View Recipe
        </Link>

        <Button
          variant={isFavorite ? 'danger' : 'secondary'}
          onClick={() => onFavoriteToggle(recipe)}
        >
          {isFavorite
            ? '♥ Remove Favorite'
            : '♡ Add Favorite'}
        </Button>
      </div>
    </div>
  </Card>
  );
};

  RecipeCard.propTypes = {
    recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  cuisine: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  prepTime: PropTypes.number.isRequired,
  cookTime: PropTypes.number.isRequired,
  servings: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  }).isRequired,

  isFavorite: PropTypes.bool,

  onFavoriteToggle: PropTypes.func.isRequired,
};

  export default RecipeCard;

  Notice that this also gives us:

  multiple props
  destructuring
  default parameter
  PropTypes
  JSX expressions
  expressions in attributes
  ternary operators
  nested ternary
  callback prop
  calculated expression
  Commit
  git add src/components/Recipe/RecipeCard.jsx
  git commit -m "Build reusable RecipeCard component"

  Step 3 — Fix RecipeList.jsx
  Your existing version is close. We'll make it a little more robust and add an empty state.

  import PropTypes from 'prop-types';

  import RecipeCard from './RecipeCard';
  import EmptyState from '../UI/EmptyState';

  const RecipeList = ({
    recipes,
    favorites = [],
    onFavoriteToggle,
  }) => {
    if (recipes.length === 0) {
      return (
        <EmptyState
          title="No recipes found"
          message="Try changing your search or filters."
        />
      );
    }

    return (
      <div className="recipe-list">
        {recipes.map((recipe) => {
          const isFavorite = favorites.some(
            (favorite) => favorite.id === recipe.id
          );

          return (
            <RecipeCard
            key={recipe.id}
            recipe={recipe}
            isFavorite={isFavorite}
            onFavoriteToggle={onFavoriteToggle}
          />
        );
      })}
    </div>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,

  favorites: PropTypes.arrayOf(
    PropTypes.object
  ),

  onFavoriteToggle: PropTypes.func.isRequired,
};

export default RecipeList;
