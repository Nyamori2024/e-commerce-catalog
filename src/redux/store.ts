import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

// Export the RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
