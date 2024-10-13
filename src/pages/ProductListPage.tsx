import React, { useState } from 'react';
import { ProductList, SearchBar } from '../components';

export const ProductListPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setPage(1);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <div>
      <div className="page-header">
        <h1>Product Catalog</h1>
      </div>
      <SearchBar onSearch={handleSearch} />
      <ProductList
        page={page}
        limit={10}
        searchTerm={searchTerm}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ProductListPage;
