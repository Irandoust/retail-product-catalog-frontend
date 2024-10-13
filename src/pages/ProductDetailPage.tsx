import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchProductById } from '../api/productApi';
import { Loading, Error, NoResult } from '../components';

interface Product {
  id: string;
  name: string;
  category: string;
  description?: string;
  price: number;
  imageUrl: string;
}

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  const placeholderImage = 'https://placehold.co/300?text=No+Image+Available';

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const data = await fetchProductById(id!);
        setProduct(data.data);
        setImageSrc(data.data.imageUrl);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchProduct();
  }, [id]);

  const handleImageError = () => {
    setImageSrc(placeholderImage);
  };

  if (isLoading) return <Loading />;
  if (isError) return <Error />;
  if (!product) return <NoResult text="No product found with this id." />;

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
