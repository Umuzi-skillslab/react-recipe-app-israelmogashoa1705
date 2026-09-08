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


