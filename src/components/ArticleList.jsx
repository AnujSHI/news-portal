// src/components/ArticleList.js
import React from 'react';
import ArticleCard from './ArticleCard';

const ArticleList = ({ articles }) => (
  <div className="flex flex-wrap justify-center">
    {articles.map((article) => (
      <ArticleCard key={article.url} article={article} />
    ))}
  </div>
);

export default ArticleList;
