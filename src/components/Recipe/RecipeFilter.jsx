import PropTypes from 'prop-types';

// RecipeFilter displays the available recipe filters and
// sends the selected values back to the parent component.
const RecipeFilter = ({
    category,
    cuisine,
    difficulty,
    sortOption,
    onCategoryChange,
    onCuisineChange,
    onDifficultyChange,
    onSortChange,
    onClearFilters,
    categories = [],
    cuisines = [],

}) => {
    return (
        <section className="filter-panel">
            {/* Category filter */}
            <div className="filter-group">
                <label htmlFor="category-filter">
                    Category
                </label>

                <select
                    id="category-filter"
                    value={category}
                    onChange={(e) => onCategoryChange(e.target.value)}
                >
                    <option value="all">All Categories</option>

                    {/* Create an option for each available category */}
                    {categories.map((item) => (
                        <option key={item} value={item}>
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </option>
                    ))}
                </select>
            </div>

            {/* Cuisine filter */}
            <div className="filter-group">
                <label htmlFor="cuisine-filter">
                    Cuisine
                </label>

                <select
                    id="cuisine-filter"
                    value={cuisine}
                    onChange={(e) => onCuisineChange(e.target.value)}
                >
                    <option value="all">All Cuisines</option>

                    {/* Create an option for each available cuisine */}
                    {cuisines.map((item) => (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
            </div>

            {/* Difficulty filter */}
            <div className="filter-group">
                <label htmlFor="difficulty-filter">
                    Difficulty
                </label>

                <select
                    id="difficulty-filter"
                    value={difficulty}
                    onChange={(e) => onDifficultyChange(e.target.value)}
                >
                    <option value="all">All Difficulties</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>

            {/* Sorting options */}
            <div className="filter-group">
                <label htmlFor="sort-filter">
                    Sort By
                </label>

                <select
                    id="sort-filter"
                    value={sortOption}
                    onChange={(e) => onSortChange(e.target.value)}
                >
                    <option value="title">
                        Name: A-Z
                    </option>

                    <option value="cookTime">
                        Cooking Time
                    </option>

                    <option value="difficulty">
                        Difficulty
                    </option>
                </select>
            </div>

            {/* Button to reset all selected filters */}
            <button
                type="button"
                className="button button-secondary"
                onClick={onClearFilters}
            >
                Clear Filters
            </button>
        </section>
    );
};

// PropTypes documents the data and callback functions
// that RecipeFilter expects from its parent component.
RecipeFilter.propTypes = {
    category: PropTypes.string.isRequired,
    cuisine: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    sortOption: PropTypes.string.isRequired,
    onCategoryChange: PropTypes.func.isRequired,
    onCuisineChange: PropTypes.func.isRequired,
    onDifficultyChange: PropTypes.func.isRequired,
    onSortChange: PropTypes.func.isRequired,
    onClearFilters: PropTypes.func.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string),
    cuisines: PropTypes.arrayOf(PropTypes.string),
};

export default RecipeFilter;