import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchArticles } from '../services/newsService';

export const loadArticles = createAsyncThunk(
  'articles/loadArticles',
  async ({ category, page }) => {
    const response = await fetchArticles(category, page);
    return response;
  }
);

const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
    status: 'idle',
    error: null,
    category: 'general',
    page: 1,
    totalPages: 1,
  },
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
      state.page = 1;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadArticles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadArticles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload.articles;
        state.totalPages = Math.ceil(action.payload.totalResults / 20);
      })
      .addCase(loadArticles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setCategory, setPage } = articlesSlice.actions;

export default articlesSlice.reducer;

