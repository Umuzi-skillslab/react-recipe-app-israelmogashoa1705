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
