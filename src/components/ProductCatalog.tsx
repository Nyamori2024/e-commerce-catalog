// ProductCatalog.tsx
// This component fetches, filters, sorts, and paginates a catalog of products and displays them in a grid layout.

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts, setPage, setSearchQuery } from '../redux/productsSlice'; // Redux actions for managing product state
import { RootState } from '../redux/store.ts'; // Root state type from the Redux store

const ProductCatalog = () => {
  // Initialize Redux dispatch
  const dispatch = useDispatch();

  // Retrieve state values from the Redux store
  const products = useSelector((state: RootState) => state.products.products);
  const searchQuery = useSelector((state: RootState) => state.products.searchQuery);
  const sortOrder = useSelector((state: RootState) => state.products.sortOrder);
  const currentPage = useSelector((state: RootState) => state.products.currentPage);
  const itemsPerPage = useSelector((state: RootState) => state.products.itemsPerPage);

  // Fetch products from an API on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products'); 
      const data = await response.json(); // Parse response data
      dispatch(setProducts(data)); // Save products to the Redux store
    };

    fetchProducts();
  }, [dispatch]); // Effect depends on the dispatch function

  // Filter products based on the search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort filtered products based on the selected sort order
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOrder === 'price-asc') return a.price - b.price; // Sort by price (ascending)
    if (sortOrder === 'price-desc') return b.price - a.price; // Sort by price (descending)
    if (sortOrder === 'rating-asc') return a.rating.rate - b.rating.rate; // Sort by rating (ascending)
    if (sortOrder === 'rating-desc') return b.rating.rate - a.rating.rate; // Sort by rating (descending)
    return 0; // No sort order applied
  });

  // Calculate pagination values
  const startIndex = (currentPage - 1) * itemsPerPage; // Start index for current page
  const paginatedProducts = sortedProducts.slice(startIndex, startIndex + itemsPerPage); // Paginate sorted products
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage); // Total number of pages

  return (
    <div>
      {/* Search input */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))} // Update search query in Redux state
        className="p-2 border border-gray-300 rounded mb-4"
      />

      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {paginatedProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded">
            {/* Product image */}
            <img 
              src={product.image || 'https://via.placeholder.com/150'} // Display placeholder if image is unavailable
              alt={product.title}
              className="w-full h-48 object-cover mb-4"
              onError={(e) => {
                e.currentTarget.src = 'https://via.placeholder.com/150'; // Fallback to placeholder if image fails to load
              }}
            />
            {/* Product details */}
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-sm text-gray-500">${product.price}</p>
            <p className="text-sm">Rating: {product.rating.rate}</p>
          </div>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-4 py-2 mx-1 ${
              index + 1 === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-300'
            }`}
            onClick={() => dispatch(setPage(index + 1))} // Update current page in Redux state
          >
            {index + 1} {/* Display page number */}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;