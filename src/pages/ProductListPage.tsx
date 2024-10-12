import React, { useState } from 'react';
import { SearchBar } from '../components';

export const ProductListPage: React.FC = () => {
  const [_, setSearchTerm] = useState('');

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <div className="page-header">
        <h1>Product Catalog</h1>
      </div>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
};

export default ProductListPage;
