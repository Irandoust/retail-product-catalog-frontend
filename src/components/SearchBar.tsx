import React, { useEffect, useMemo, useState } from 'react';
import '../styles/SearchBar.css';

interface SearchBarProps {
  onSearch: (term: string) => void;
}

/**
 * debounce
 * A utility function that delays the execution of a given function until
 * after a specified delay period. Useful for delaying API calls during typing.
 *
 * @param {Function} func - The function to be debounced
 * @param {number} delay - The delay period in milliseconds
 * @returns {Function} A debounced version of the input function
 */
export function debounce(func: (...args: any[]) => void, delay: number) {
  let timeoutId: NodeJS.Timeout;
  return (...args: any[]) => {
    // Clear any existing timeout to reset the debounce period
    if (timeoutId) clearTimeout(timeoutId);
    // Set a new timeout to call the function after the delay
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

/**
 * SearchBar Component
 * Renders a search input field with debounced search functionality.
 * Also displays a tooltip if the user input is less than 3 characters.
 *
 * @param {SearchBarProps} onSearch - A callback function to trigger the search logic
 */
export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  // State to track the user's input in the search bar
  const [term, setTerm] = useState('');

  // State to control the visibility of the tooltip for short search terms
  const [showTooltip, setShowTooltip] = useState(false);

  /**
   * useMemo to memoize the debounced search function.
   * The search will only trigger after the user stops typing for the specified delay period.
   *
   * The delay is configurable via the REACT_APP_SEARCH_DEBOUNCE_PERIOD environment variable.
   * Default delay is 500ms.
   */
  const debouncedSearch = useMemo(
    () =>
      debounce(
        onSearch,
        Number(process.env.REACT_APP_SEARCH_DEBOUNCE_PERIOD) || 500,
      ),
    [onSearch], // Recreate debounced function only if onSearch changes
  );

  /**
   * useEffect to handle the logic for the search input.
   * - Shows a tooltip if the input is less than 3 characters.
   * - Resets the search results when the input is cleared.
   * - Triggers the debounced search if the input is 3 or more characters.
   */
  useEffect(() => {
    // Show the tooltip if the input is between 1 and 2 characters
    if (term.trim().length > 0 && term.trim().length < 3) {
      setShowTooltip(true);
    } else {
      setShowTooltip(false);
    }

    // If the input is cleared, reset the search results
    if (term.trim().length === 0) {
      onSearch('');
    }
    // Trigger the debounced search when the input has 3 or more characters
    else if (term.trim().length >= 3) {
      debouncedSearch(term);
    }
  }, [term, debouncedSearch, onSearch]); // Re-run effect whenever 'term' or 'debouncedSearch' changes

  return (
    <div className="search-bar-container">
      <div className=" input">
        <input
          className="form-control"
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search for products..."
        />

        {showTooltip && (
          <div className="tooltip">
            Search term must be at least 3 characters
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
