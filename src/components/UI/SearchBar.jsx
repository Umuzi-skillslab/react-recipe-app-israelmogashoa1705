import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({
  searchTerm,
  onSearch,
  placeholder = 'Search recipes...',
}) => {
  // Track whether the input currently has keyboard focus.
  const [isFocused, setIsFocused] = useState(false);

  // Track whether the user has attempted to submit the search form.
  const [hasSubmitted, setHasSubmitted] = useState(false);

  // Handle form submission without reloading the page.
  const handleSubmit = (event) => {
    event.preventDefault();
    setHasSubmitted(true);
  };

  return (
    <form
      className={`search-bar ${isFocused ? 'search-focused' : ''
        }`}
      onSubmit={handleSubmit}
    >
      <label htmlFor="recipe-search">
        Search recipes
      </label>

/*

      <input
        id="recipe-search"
        type="text"
        value={searchTerm}
        placeholder={placeholder}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        aria-label="Search recipes"
      />

      {hasSubmitted && (
        <p className="search-feedback">
          Searching for{' '}
          <strong>{searchTerm || 'all recipes'}</strong>
        </p>
      )}
    </form>
  );
};

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default SearchBar;


