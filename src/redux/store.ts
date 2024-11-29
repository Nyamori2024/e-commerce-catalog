// Import necessary functions and reducers
import { configureStore } from '@reduxjs/toolkit'; // Import configureStore to set up the Redux store
import productsReducer from './productsSlice'; // Import the products reducer for state management

// Create and configure the Redux store
const store = configureStore({
  reducer: {
    products: productsReducer, // Register the products reducer under the "products" state slice
  },
});

// Export the RootState type
// This infers the structure of the entire Redux state from the store's reducers
export type RootState = ReturnType<typeof store.getState>;

// Export the AppDispatch type
// This represents the type of the store's dispatch function
export type AppDispatch = typeof store.dispatch;

// Export the configured Redux store for use in the application
export default store;
