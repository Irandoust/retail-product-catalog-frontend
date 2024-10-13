import React, { useCallback, useState } from 'react';
import { ProductList, SearchBar } from '../components';

/**
 * ProductListPage Component
 *
 * This component serves as the main page for displaying the product catalog.
 * It includes a search bar for filtering products and paginated product listings.
 *
 * State:
 * - searchTerm: Tracks the current search term entered by the user.
 * - page: Tracks the current page for pagination.
 *
 * Functions:
 * - handleSearch: Updates the search term and resets the pagination to page 1.
 * - handlePageChange: Updates the current page for pagination when the user navigates to a new page.
 *
 * @returns {JSX.Element} A page containing the product catalog with search and pagination functionality.
 */
export const ProductListPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);

  /**
   * Updates the search term and resets the page to 1.
   * This function is memoized using useCallback to avoid unnecessary re-renders
   * when passed down to child components.
   *
   * It is triggered when the user submits a new search term, ensuring that the
   * search term and pagination are properly updated.
   *
   * @param {string} term - The search term entered by the user
   */
  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
    setPage(1);
  }, []); // No dependencies, so it's only created once

  /**
   * Updates the current page for pagination.
   * Triggered when the user clicks on a new page in the pagination control.
   *
   * @param {number} newPage - The new page number to navigate to
   */
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <div>
      <div className="page-header">
        <h1>Product Catalog</h1>
      </div>
      <SearchBar onSearch={handleSearch} />
      <hr />
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
