// productsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from './types'; // Import the Product type
// Define your initial state and actions here

interface ProductsState {
  products: Product[];
  searchQuery: string;
  sortOrder: string;
  currentPage: number;
  itemsPerPage: number;
}

const initialState: ProductsState = {
  products: [],
  searchQuery: '',
  sortOrder: 'price-asc',
  currentPage: 1,
  itemsPerPage: 8,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    setSortOrder(state, action: PayloadAction<string>) {
      state.sortOrder = action.payload;
    },
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
  },
});

export const { setPage, setSearchQuery, setSortOrder, setProducts } = productsSlice.actions;
export default productsSlice.reducer;
