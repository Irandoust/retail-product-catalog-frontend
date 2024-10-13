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

export const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const [imageSrc, setImageSrc] = useState(product.imageUrl);

  const placeholderImage = 'https://placehold.co/100?text=No+Image';

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
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
      </div>
      <hr />
    </div>
  );
};

export default ProductItem;
