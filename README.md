# Retail Product Catalog with Fuzzy Search - Frontend Project Documentation

By Ali Irandoust

This is the **frontend** for the Retail Product Catalog system, which interacts with a backend API to display, search, and manage products. The frontend is built with **React** and **TypeScript** from scratch, and uses **Axios** to handle API requests. It offers a paginated product list, a search feature, and detailed product views. The project integrates **Bootstrap CSS** for responsive styling and clean UI components.

The backend API handles product data, while this frontend connects to the backend API to display that data in an intuitive and user-friendly interface.

## Table of Contents

- [Project Overview](#project-overview)
- [Models](#models)
- [API Integration](#api-integration)
- [Components](#components)
- [Pages](#pages)
- [Styling with Bootstrap CSS](#styling-with-bootstrap)
- [Running the Project](#running-the-project)
- [Environment Variables](#environment-variables)
- [Key Dependencies](#key-dependencies)

## Project Overview

This project provides an interactive user interface for the product catalog, built with **React** and **TypeScript**. Users can browse through a list of products, search by product name, and view detailed information about individual products. The frontend connects to the backend API through **Axios** to retrieve product data and perform actions like searching and pagination.

## Key Features

- Paginated product list display.
- Search functionality that filters products by name.
- Detailed product view for each individual item.
- Loading and error handling for data fetching.
- Bootstrap CSS integration for responsive UI design.

## Models

To ensure type safety and consistency across the application, several reusable TypeScript interfaces are defined in the `models/` directory:

- **Product**: Represents the structure of a product in the catalog, including fields like `id`, `name`, `price`, `caregory`, `description`, and `imageUrl`.
- **ServiceResponse**: A generic interface to standardize API responses, including success flags, messages, status codes, and the returned data.

- **PaginatedResult**: Handles paginated API responses, providing metadata like `page`, `limit`, `totalItems`, `totalPages`, and the array of `results`.

These models are used across the application to ensure type safety and consistent structure for API responses.

## API Integration

The frontend interacts with the backend API through the `api/productApi.ts` file, using **Axios** for HTTP requests. The API service layer abstracts the actual API calls and handles the data fetching.

The key API functions are:

- **fetchProducts**: Fetches a paginated list of products from the backend.
- **fetchProductById**: Retrieves detailed information about a specific product by its ID.

- **searchProducts**: Allows users to search for products by name with pagination support.

These functions ensure data is fetched in a structured and consistent manner, using the `ServiceResponse` and `PaginatedResult` models for type safety.

## Components

The UI is built with reusable React components that encapsulate different parts of the application. Each component handles a specific responsibility, ensuring a clean separation of concerns.

- **SearchBar**: Allows users to input search terms to filter products by name.
- **ProductList**: Displays a paginated list of products, integrates the search feature, and allows navigation through product pages.

- **ProductItem**: Represents an individual product within the list, displaying details like image, name, price, and category.

- **Loading**: Displays a loading spinner while data is being fetched.

- **Error**: Displays error messages when there is an issue with data fetching.

- **Pagination**: Manages page navigation, allowing users to move through product pages.

- **NoResult**: Displays a message when no products match the search criteria.

## Pages

The application consists of the following pages:

- **ProductListPage**: Displays the main product catalog with pagination and search functionality.
- **ProductDetailPage**: Displays detailed information about a specific product selected from the catalog.

These pages handle the core navigation and interaction for the product catalog.

## Styling with Bootstrap

The app uses **Bootstrap** for responsive, clean UI styling. Bootstrap's built-in classes (such as `alert`, `btn`, and `media`) are applied to components for consistent layout and styling. This helps reduce the need for custom CSS while ensuring a polished and modern look across different screen sizes.

## Running the Project

1. Install the dependencies:

```sh
   npm install
```

2. Run the development server:

```sh
   npm start
```

The app will be available at `http://localhost:3000`.

3. Build the project for production:

```sh
   npm run build
```

## Environment Variables

You can configure the following environment variables in a `.env` file at the root of the project:

- **REACT_APP_API_BASE_URL**: The base URL for the API (defaults to `http://localhost:3000` if not provided).

Example `.env` file:

```sh
  REACT_APP_API_BASE_URL=http://localhost:3000
```

## Key Dependencies

- **Axios**: For making API requests.
- **React Router DOM**: For routing within the app.
- **Bootstrap CSS**: For responsive and clean UI styling.
- **TypeScript**: For type-safe development.

This project is built using **React**, **TypeScript**, **Axios**, and **Bootstrap**. The app supports pagination, search functionality, and uses reusable models for consistent API response handling.
