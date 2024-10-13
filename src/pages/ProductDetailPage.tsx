import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchProductById } from '../api/productApi';
import { Loading, Error, NoResult } from '../components';
import { Product } from '../models/productModel';

/**
 * ProductDetailPage Component
 *
 * This component fetches and displays the details of a single product based on the product ID from the URL.
 * It handles various states, including loading, error, and no product found, while displaying the product's
 * name, category, price, description, and image.
 *
 * - Fetches the product using the `fetchProductById` API call.
 * - Uses React Router's `useParams` to retrieve the product ID from the URL.
 * - Displays a loading state until the product data is retrieved.
 * - If the product's image fails to load, a placeholder image is used.
 *
 * @returns {JSX.Element} A product detail page with the product information or a loading/error state.
 */
const ProductDetailPage: React.FC = () => {
  // Get the product ID from the URL using React Router's useParams
  const { id } = useParams<{ id: string }>();

  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // Placeholder image for when the product image fails to load
  const [imageSrc, setImageSrc] = useState('');

  const placeholderImage = 'https://placehold.co/300?text=No+Image+Available';

  // useEffect to fetch the product details when the component mounts or when the product ID changes
  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const data = await fetchProductById(id!);
        setProduct(data.data);
        setImageSrc(data!.data!.imageUrl);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchProduct();
  }, [id]);

  /**
   * handleImageError
   *
   * This function is triggered when the product image fails to load.
   * It replaces the broken image with a placeholder image.
   */
  const handleImageError = () => {
    setImageSrc(placeholderImage);
  };

  if (isLoading) return <Loading />;
  if (isError || !product)
    return (
      <div className="page-header">
        <Error text="Error fetching the product or no product exists with the provided ID." />
      </div>
    );

  return (
    <div>
      <div className="page-header">
        <ol className="breadcrumb">
          <li>
            <Link to="/">Procucts</Link>
          </li>
          <li className="active">{product.name}</li>
        </ol>
        <h1>{product.name}</h1>
      </div>
      <div className="media">
        <div className="media-left">
          <img
            src={imageSrc}
            alt={product.name}
            onError={handleImageError}
            style={{ width: '300px', height: '300px', objectFit: 'cover' }}
          />
        </div>
        <div className="media-body">
          <h2>€{product.price}</h2>
          <span className="label label-primary">{product.category}</span>
          <hr />
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
