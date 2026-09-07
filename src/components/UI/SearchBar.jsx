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




/*

import PropTypes from 'prop-types';

const SearchBar = ({
  searchTerm,
  onSearch,
  placeholder = 'Search recipes...',
}) => {
  const handleFocus = (event) => {
    event.target.parentElement.classList.add(
      'search-focused'
    );
  };

  const handleBlur = (event) => {
    event.target.parentElement.classList.remove(
      'search-focused'
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form
      className="search-bar"
      onSubmit={handleSubmit}
    >
      <label htmlFor="recipe-search">
        Search recipes
      </label>

      <input
        id="recipe-search"
        type="text"
        value={searchTerm}
        placeholder={placeholder}
        onChange={(event) =>
          onSearch(event.target.value)
        }
        onFocus={handleFocus}
        onBlur={handleBlur}
        aria-label="Search recipes"
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

*/
