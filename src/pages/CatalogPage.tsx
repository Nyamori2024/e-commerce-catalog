import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery, setSortOrder, setPage, setProducts } from '../redux/productsSlice'; // Ensure you import the actions
import { RootState } from '../redux/store'; // Import RootState type
import { AppDispatch } from '../redux/store'; // Import AppDispatch type
import ProductCard from '../components/ProductCard.tsx'; // Assuming you have a ProductCard component
import { Product } from '../redux/types.ts'; // Import Product type

const CatalogPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { products, searchQuery, sortOrder, currentPage, itemsPerPage } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    // Assuming you fetch products from an API and dispatch them here
    const fetchProducts = async () => {
      const response = await fetch('your-api-endpoint');
      const data: Product[] = await response.json();
      dispatch(setProducts(data));
    };

    fetchProducts(); // Fetch products on component mount
  }, [dispatch]);

  const filteredProducts = products
    .filter((product: Product) => product.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a: Product, b: Product) => {
      if (sortOrder === 'price-asc') return a.price - b.price;
      if (sortOrder === 'price-desc') return b.price - a.price;
      if (sortOrder === 'rating-asc') return a.rating.rate - b.rating.rate;
      if (sortOrder === 'rating-desc') return b.rating.rate - a.rating.rate;
      return 0;
    });

  // Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search products..."
          className="p-2 border rounded w-full md:w-1/2"
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        />
        <select
          className="p-2 border rounded"
          onChange={(e) => dispatch(setSortOrder(e.target.value))}
        >
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating-asc">Rating: Low to High</option>
          <option value="rating-desc">Rating: High to Low</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {paginatedProducts.map((product: Product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            rating={product.rating.rate}
          />
        ))}
      </div>
      {/* Pagination controls */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-4 py-2 mx-1 ${index + 1 === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
            onClick={() => dispatch(setPage(index + 1))}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
