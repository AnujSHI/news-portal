import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ArticleList from './components/ArticleList';
import Pagination from './components/Pagination';
import ArticleDetail from './components/ArticleDetail';
import { loadArticles, setCategory, setPage } from './slices/articlesSlices';

const App = () => {
  const dispatch = useDispatch();
  const { articles, status, category, page, totalPages } = useSelector(
    (state) => state.articles
  );

  useEffect(() => {
    dispatch(loadArticles({ category, page }));
  }, [category, page, dispatch]);

  const categories = [
    'general',
    'business',
    'entertainment',
    'health',
    'science',
    'sports',
    'technology',
  ];

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header
          categories={categories}
          selectedCategory={category}
          onSelectCategory={(newCategory) => {
            dispatch(setCategory(newCategory));
            dispatch(setPage(1));
          }}
        />
        <Routes>
          <Route
            path="/"
            element={
              <main className="p-4">
                {status === 'loading' && <p>Loading...</p>}
                {status === 'failed' && <p>Error loading articles.</p>}
                {status === 'succeeded' && <ArticleList articles={articles} />}
                <Pagination
                  page={page}
                  totalPages={totalPages}
                  onPageChange={(newPage) => dispatch(setPage(newPage))}
                />
              </main>
            }
          />
          <Route path="/article/:title" element={<ArticleDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
