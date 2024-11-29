// ProductCatalog.tsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts, setPage, setSearchQuery } from '../redux/productsSlice';
import { RootState } from '../redux/store.ts';

const ProductCatalog = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);
  const searchQuery = useSelector((state: RootState) => state.products.searchQuery);
  const sortOrder = useSelector((state: RootState) => state.products.sortOrder);
  const currentPage = useSelector((state: RootState) => state.products.currentPage);
  const itemsPerPage = useSelector((state: RootState) => state.products.itemsPerPage);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      dispatch(setProducts(data));
    };

    fetchProducts();
  }, [dispatch]);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOrder === 'price-asc') return a.price - b.price;
    if (sortOrder === 'price-desc') return b.price - a.price;
    if (sortOrder === 'rating-asc') return a.rating.rate - b.rating.rate;
    if (sortOrder === 'rating-desc') return b.rating.rate - a.rating.rate;
    return 0;
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = sortedProducts.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        className="p-2 border border-gray-300 rounded mb-4"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {paginatedProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded">
            <img 
              src={product.image || 'https://via.placeholder.com/150'} 
              alt={product.title} 
              className="w-full h-48 object-cover mb-4" 
              onError={(e) => {
                e.currentTarget.src = 'https://via.placeholder.com/150';
              }}
            />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-sm text-gray-500">${product.price}</p>
            <p className="text-sm">Rating: {product.rating.rate}</p>
          </div>
        ))}
      </div>
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

export default ProductCatalog;