import axios from 'axios';
import { PaginatedResult, ServiceResponse, Product } from '../models';

/**
 * Axios instance with default settings.
 * - baseURL: Uses the API base URL from the environment variable, defaults to 'http://localhost:3000' if not set.
 * - headers: Sets the Content-Type to 'application/json' for all requests.
 */
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Fetches a paginated list of products from the API.
 *
 * @param {number} page - The current page to fetch (defaults to 1).
 * @param {number} limit - The number of products to fetch per page (defaults to 10).
 * @returns {Promise<ServiceResponse>} The API response containing the products and pagination data.
 */
export const fetchProducts = async (
  page: number = 1,
  limit: number = 10,
): Promise<ServiceResponse<PaginatedResult<Product>>> => {
  const response = await api.get(`/products`, {
    params: { page, limit }, // Query parameters for pagination
  });
  return response.data;
};

/**
 * Fetches the details of a single product by its ID.
 *
 * @param {string} id - The unique identifier of the product to fetch.
 * @returns {Promise<ServiceResponse>} The API response containing the product details.
 */
export const fetchProductById = async (
  id: string,
): Promise<ServiceResponse<Product | null>> => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

/**
 * Searches for products by a search term, with pagination support.
 *
 * @param {string} term - The search term to filter products by.
 * @param {number} page - The current page to fetch (defaults to 1).
 * @param {number} limit - The number of products to fetch per page (defaults to 10).
 * @returns {Promise<ServiceResponse>} The API response containing the search results and pagination data.
 */
export const searchProducts = async (
  term: string,
  page: number = 1,
  limit: number = 10,
): Promise<ServiceResponse<PaginatedResult<Product>>> => {
  const response = await api.get(`products/search`, {
    params: { term, page, limit }, // Query parameters for search term and pagination
  });
  return response.data;
};
