import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchProducts = async (page: number = 1, limit: number = 10) => {
  const response = await api.get(`/products`, {
    params: { page, limit },
  });
  return response.data;
};

export const fetchProductById = async (id: string) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

export const searchProducts = async (
  term: string,
  page: number = 1,
  limit: number = 10,
) => {
  const response = await api.get(`products/search`, {
    params: { term, page, limit },
  });
  return response.data;
};
