import React, { useState, useEffect } from 'react';
import { fetchProducts, searchProducts } from '../api/productApi';
import {
  ProductItem,
  Loading,
  Error,
  Pagination,
  NoResult,
} from '../components';

interface ProductListProps {
  page: number;
  limit: number;
  searchTerm?: string;
  onPageChange: (page: number) => void;
}

/**
 * ProductList Component
 * Fetches and displays a list of products, with support for pagination and search.
 * Handles loading states, error states, and the case where no products are found.
 *
 * @param {ProductListProps} page - The current page number
 * @param {ProductListProps} limit - Number of products to display per page
 * @param {ProductListProps} searchTerm - Optional search term for filtering products
 * @param {ProductListProps} onPageChange - Callback function to handle pagination changes
 */
export const ProductList: React.FC<ProductListProps> = ({
  page,
  limit,
  searchTerm,
  onPageChange,
}) => {
  const [products, setProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  /**
   * Fetches products from the API whenever the page, limit, or searchTerm changes.
   * If a searchTerm is provided and is at least 3 characters, it will perform a search.
   * Otherwise, it fetches products without filtering.
   */
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const data =
          searchTerm && searchTerm.length >= 3 // If search term is valid, search products
            ? await searchProducts(searchTerm, page, limit)
            : await fetchProducts(page, limit); // Otherwise, fetch all products for the current page
        setProducts(data.data.results);
        setTotalPages(data.data.totalPages);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [page, limit, searchTerm]);

  if (isLoading) return <Loading />;

  if (isError) return <Error />;

  // If there are no products found based on the search term
  if (searchTerm && !products.length)
    return (
      <NoResult text="No products were found with your search criteria." />
    );

  // If no search term is provided but no products exist
  if (!searchTerm && !products.length)
    return <NoResult text="No product available." />;

  return (
    <div>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}

      <Pagination
        totalPages={totalPages}
        currentPage={page}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default ProductList;
