import React, { useState, useEffect } from 'react';
import { fetchProducts, searchProducts } from '../api/productApi';
import { ProductItem, Loading, Error, Pagination } from '../components';

interface ProductListProps {
  page: number;
  limit: number;
  searchTerm?: string;
  onPageChange: (page: number) => void;
}

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

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const data = searchTerm
          ? await searchProducts(searchTerm, page, limit)
          : await fetchProducts(page, limit);
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