import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery, setSortOrder, setPage } from '../redux/productsSlice'; // Import Redux actions for managing search, sorting, and pagination
import { RootState } from '../redux/store'; // Import RootState type to access the state structure
import { AppDispatch } from '../redux/store'; // Import AppDispatch type for typing the dispatch function
import ProductCard from '../components/ProductCard.tsx'; // Assuming ProductCard component displays individual product details
import { Product } from '../redux/types.ts'; // Import the Product type for type safety

const CatalogPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch(); // Use dispatch for sending actions to Redux store
  // Extract necessary state from Redux store
  const { products, searchQuery, sortOrder, currentPage, itemsPerPage } = useSelector(
    (state: RootState) => state.products // Select state from Redux store for products, search query, sort order, etc.
  );

  // Filter products based on the search query and sort them according to the selected sort order
  const filteredProducts = products
    .filter((product: Product) => product.title.toLowerCase().includes(searchQuery.toLowerCase())) // Filter products by title based on search query
    .sort((a: Product, b: Product) => {
      // Sort products based on selected sort order
      if (sortOrder === 'price-asc') return a.price - b.price;
      if (sortOrder === 'price-desc') return b.price - a.price;
      if (sortOrder === 'rating-asc') return a.rating.rate - b.rating.rate;
      if (sortOrder === 'rating-desc') return b.rating.rate - a.rating.rate;
      return 0; // Default sorting (no sorting)
    });

  // Pagination logic to determine which products to show on the current page
  const startIndex = (currentPage - 1) * itemsPerPage; // Calculate the start index for products on the current page
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage); // Get the products for the current page

  // Calculate the total number of pages based on filtered products and items per page
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <div className="p-4">
      {/* Search and sort controls */}
      <div className="flex justify-between items-center mb-4">
        {/* Search input field */}
        <input
          type="text"
          placeholder="Search products..."
          className="p-2 border rounded w-full md:w-1/2"
          onChange={(e) => dispatch(setSearchQuery(e.target.value))} // Dispatch action to update search query in Redux store
        />
        {/* Sort selection dropdown */}
        <select
          className="p-2 border rounded"
          onChange={(e) => dispatch(setSortOrder(e.target.value))} // Dispatch action to update sort order in Redux store
        >
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating-asc">Rating: Low to High</option>
          <option value="rating-desc">Rating: High to Low</option>
        </select>
      </div>

      {/* Display products in a grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {paginatedProducts.map((product: Product) => (
          <ProductCard
            key={product.id} // Unique key for each product card
            title={product.title}
            price={product.price}
            image={product.image}
            rating={product.rating.rate} // Pass product data to the ProductCard component
          />
        ))}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-4 py-2 mx-1 ${index + 1 === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
            onClick={() => dispatch(setPage(index + 1))} // Dispatch action to set the current page
          >
            {index + 1} {/* Display page number */}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;