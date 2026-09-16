# Savora — Recipe Discovery & Meal Planning App

A fully functional React application built for the React Capstone project. Savora lets users browse recipes, filter by category and cuisine, watch cooking tutorial videos, listen to audio guides, save favourites, and plan a full week of meals.

---

## Features

- **Recipe browsing** — 18 recipes across 5 categories (breakfast, lunch, dinner, dessert, snacks)
- **Search & filters** — search by title or ingredient; filter by category, cuisine, and difficulty; sort by name, cooking time, or difficulty
- **Recipe detail** — full ingredient list, step-by-step instructions, embedded video tutorial, and audio cooking tips
- **Favourites** — add or remove recipes from a persistent favourites list; count badge shown in the navbar
- **Weekly meal planner** — assign any recipe to any day (Monday–Sunday) and any meal slot (breakfast, lunch, dinner); clear the whole week with one click
- **LocalStorage persistence** — favourites and meal plan survive page refreshes
- **Responsive design** — mobile hamburger menu, two-column tablet layout, three-column desktop grid
- **404 page** — friendly not-found page with a home link

---

## Technologies

- **React 18** (Vite scaffold)
- **React Router DOM v6** — client-side routing, `useParams`, `useNavigate`, `NavLink`
- **PropTypes** — runtime prop validation
- **CSS custom properties** — design-token system in `App.css`
- **CSS Modules** — scoped styles in `UI.module.css`, `Recipe.module.css`, `MealPlanner.module.css`, `Media.module.css`, `common.module.css`
- **HTML5 `<video>` / `<audio>`** — native media elements with browser controls
- **localStorage** — client-side data persistence

---

## Running the App Locally

### Prerequisites

Before you start, make sure you have the following installed on your machine:

- **Node.js** v18 or higher — download from [nodejs.org](https://nodejs.org)
- **npm** v9 or higher (comes bundled with Node.js)

To check your versions, open a terminal and run:

```bash
node -v
npm -v
```

---

### Step 1 — Clone or download the project

If you have the repository on GitHub:

```bash
git clone https://github.com/your-username/recipe-app.git
cd recipe-app
```

Or, if you downloaded the project as a ZIP file, unzip it and open a terminal inside the project folder.

---

### Step 2 — Install dependencies

Inside the project folder, run:

```bash
npm install
```

This downloads React, React Router, PropTypes, and all other packages listed in `package.json` into a `node_modules` folder. It only needs to be done once (or again if `package.json` changes).

---

### Step 3 — Start the development server

```bash
npm run dev
```

Vite will compile the app and print something like:

```
  VITE v5.x.x  ready in 300ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://192.168.x.x:5173/
```

Open your browser and go to **http://localhost:5173** to use the app. The page reloads automatically whenever you save a file.

---

### Step 4 — (Optional) Add placeholder media assets

The recipes reference video and audio files stored under `public/assets/`. Without real files the media players will still render, but playback will not work. To add placeholders:

1. Create the folders if they do not exist:

```bash
mkdir -p public/assets/images
mkdir -p public/assets/videos
mkdir -p public/assets/audio
```

2. Drop any `.jpg` images, `.mp4` videos, and `.mp3` audio files in the matching folders, using the filenames listed in `src/data/recipesData.js` (e.g. `pancakes.jpg`, `breakfast-tips.mp3`).

You can use any royalty-free placeholder files for development — the app will work fully without them, just without media playback.

---

### Step 5 — Build for production (optional)

To create an optimised production build:

```bash
npm run build
```

The compiled output is written to the `dist/` folder. You can preview it locally with:

```bash
npm run preview
```

---

### Troubleshooting

| Problem | Fix |
|---|---|
| `npm install` fails | Make sure Node.js v18+ is installed and try again |
| Port 5173 already in use | Run `npm run dev -- --port 3000` to use a different port |
| Blank page in browser | Open the browser console (F12) and check for import errors — usually a missing file |
| Changes not showing | Hard-refresh with Ctrl+Shift+R (Cmd+Shift+R on Mac) |

---

## Project Structure

```
src/
├── components/
│   ├── Navigation/   Navbar.jsx, Navbar.module.css
│   ├── Recipe/       RecipeCard, RecipeList, RecipeFilter, Recipe.module.css
│   ├── MealPlanner/  MealPlanner, DayCard, MealPlanner.module.css
│   ├── Media/        VideoPlayer, AudioPlayer, Media.module.css
│   ├── UI/           Button, Card, SearchBar, Loading, Modal, EmptyState, UI.module.css
│   └── common/       Footer, common.module.css
├── pages/            Home, RecipesPage, RecipeDetailPage, MealPlannerPage, FavoritesPage, NotFound
├── data/             recipesData.js (18 recipes)
├── utils/            helpers.js (formatCookTime, createEmptyMealPlan, capitalize, getDifficultyStyle)
├── App.jsx           Root component, shared state, route definitions
├── App.css           Global design tokens and utility classes
└── index.css         Minimal reset
```

---

## Component Descriptions

| Component | Purpose |
|---|---|
| `App` | Root component; owns `favorites` and `mealPlan` state; defines all routes |
| `Navbar` | Sticky header with nav links, active styling, hamburger menu, and favourite count badge |
| `Footer` | Site footer with secondary navigation and copyright |
| `RecipeCard` | Summary card with image, metadata, favourite toggle, and detail link |
| `RecipeList` | Renders a grid of `RecipeCard` components; shows `EmptyState` when empty |
| `RecipeFilter` | Four `<select>` dropdowns for category, cuisine, difficulty, and sort order |
| `RecipeDetailPage` | Full detail view with meal-plan controls, ingredient list, instructions, video, and audio |
| `MealPlanner` | Weekly grid container; shows filled-slot progress |
| `DayCard` | One card per day; recipe picker dropdown per meal slot |
| `VideoPlayer` | HTML5 `<video>` with play/pause state tracking |
| `AudioPlayer` | HTML5 `<audio>` with play/pause state tracking |
| `Button` | Reusable button with `primary`, `secondary`, and `danger` variants |
| `Card` | Reusable container using the `children` prop |
| `SearchBar` | Controlled input with `onFocus`, `onBlur`, and `onSubmit` handling |
| `Loading` | Animated spinner shown during simulated data load |
| `Modal` | Overlay dialog using `children` prop |
| `EmptyState` | Friendly placeholder for empty lists |

---

## State Management

All shared state lives in `App.jsx` and flows down as props:

- `favorites` (array) — toggled via `handleFavoriteToggle`; passed to `Navbar`, `RecipesPage`, `RecipeDetailPage`, `FavoritesPage`
- `mealPlan` (object) — updated via `handleAddToMealPlan` / `handleRemoveFromMealPlan` / `handleClearMealPlan`; passed to `MealPlannerPage`

Three `useEffect` hooks in `App.jsx` handle localStorage persistence.

Local state exists in: `RecipesPage` (search/filter), `RecipeDetailPage` (day/meal selectors, confirmation), `SearchBar` (focus, submitted), `Navbar` (menuOpen), `VideoPlayer` (isPlaying), `AudioPlayer` (isPlaying), `DayCard` (selectedRecipeIds).

---

## Routing

| Path | Component | Notes |
|---|---|---|
| `/` | `Home` | Hero, stats, featured recipes, audio guide |
| `/recipes` | `RecipesPage` | Search, filter, recipe grid |
| `/recipes/:id` | `RecipeDetailPage` | Dynamic route via `useParams` |
| `/meal-planner` | `MealPlannerPage` | Weekly planner |
| `/favorites` | `FavoritesPage` | Saved recipes |
| `*` | `NotFound` | 404 catch-all |

---

## Future Enhancements

- Drag-and-drop between meal-plan slots using `@dnd-kit`
- User accounts with cloud-synced favourites
- Recipe rating and review system
- Nutrition information per recipe
- Shopping list generated from the weekly meal plan
- Dark mode toggle
