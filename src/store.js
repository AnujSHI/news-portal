import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from './slices/articlesSlices';

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
  },
});
