import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (term: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  const handleSearch = () => {
    if (term.trim()) {
      onSearch(term);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="input-group">
      <input
        className="form-control"
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        onKeyUp={handleKeyPress}
        placeholder="Search for products..."
      />
      <span className="input-group-btn">
        <button className="btn btn-default" onClick={handleSearch}>
          Search
        </button>
      </span>
    </div>
  );
};

export default SearchBar;
