import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface ProductItemProps {
  product: {
    id: string;
    name: string;
    category: string;
    description?: string;
    price: number;
    imageUrl: string;
  };
}

/**
 * ProductItem Component
 * Displays a single product's details, including its image, name, category, description, and price.
 * Implements image failover in case the image URL is broken or unavailable.
 *
 * @param {ProductItemProps} product - The product object with all necessary details
 */
export const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  // State to manage the product image source
  const [imageSrc, setImageSrc] = useState(product.imageUrl);

  // Placeholder image URL to use when the actual product image fails to load
  const placeholderImage = 'https://placehold.co/100?text=No+Image';

  /**
   * handleImageError
   * This function is triggered when the product image fails to load.
   * It sets the image source to a placeholder image.
   */
  const handleImageError = () => {
    setImageSrc(placeholderImage);
  };

  return (
    <div className="media" key={product.id}>
      <div className="media-left">
        <img src={imageSrc} onError={handleImageError} />
      </div>
      <div className="media-body">
        <div className="media-heading">
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </div>
        <span className="label label-primary">{product.category}</span>
        <p>{product.description}</p>
        <b>Price: {product.price}</b>
      </div>
      <hr />
    </div>
  );
};

export default ProductItem;
