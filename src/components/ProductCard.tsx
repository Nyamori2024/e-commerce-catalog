// ProductCard.tsx
// This component is responsible for rendering a product card with details like image, title, price, and rating.

import React from 'react';

// Define the props interface for the ProductCard component
interface ProductCardProps {
  title: string; 
  price: number; 
  image: string; 
  rating: number; 
}

// Define the ProductCard functional component
const ProductCard: React.FC<ProductCardProps> = ({ title, price, image, rating }) => {
  return (
    <div className="border rounded p-4 shadow-lg">
      {/* Product image */}
      <img src={image} alt={title} className="w-full h-48 object-cover mb-2" />

      {/* Product title */}
      <h3 className="text-lg font-semibold mb-2">{title}</h3>

      {/* Product price */}
      <p className="text-xl text-green-600">${price}</p>

      {/* Product rating */}
      <p className="text-sm text-gray-500">Rating: {rating}</p>
    </div>
  );
};

// Export the ProductCard component for use in other parts of the application
export default ProductCard;
