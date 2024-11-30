export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: { rate: number }; // Assuming each product has a rating object
  thumbnail: string;
}