import React, { useEffect, useMemo, useState } from 'react';
import '../styles/SearchBar.css';

interface SearchBarProps {
  onSearch: (term: string) => void;
}

export function debounce(func: (...args: any[]) => void, delay: number) {
  let timeoutId: NodeJS.Timeout;
  return (...args: any[]) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [term, setTerm] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);

  const debouncedSearch = useMemo(
    () =>
      debounce(
        onSearch,
        Number(process.env.REACT_APP_SEARCH_DEBOUNCE_PERIOD) || 500,
      ),
    [onSearch],
  );

  useEffect(() => {
    if (term.trim().length > 0 && term.trim().length < 3) {
      setShowTooltip(true);
    } else {
      setShowTooltip(false);
    }

    if (term.trim().length === 0) {
      onSearch('');
    } else if (term.trim().length >= 3) {
      debouncedSearch(term);
    }
  }, [term, debouncedSearch]);

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
