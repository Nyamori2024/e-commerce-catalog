// ProductCard.tsx
import React from 'react';

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  rating: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, image, rating }) => {
  return (
    <div className="border rounded p-4 shadow-lg">
      <img src={image} alt={title} className="w-full h-48 object-cover mb-2" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-xl text-green-600">${price}</p>
      <p className="text-sm text-gray-500">Rating: {rating}</p>
    </div>
  );
};

export default ProductCard;