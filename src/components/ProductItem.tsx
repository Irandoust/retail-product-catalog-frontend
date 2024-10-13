import React from 'react';
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
  return (
    <div className="media" key={product.id}>
      <div className="media-left">
        <img src={product.imageUrl} />
      </div>
      <div className="media-heading">
        <Link to={`/products/${product.id}`}>{product.name}</Link>
      </div>
      <div className="media-body">
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
      </div>
      <hr />
    </div>
  );
};

export default ProductItem;
