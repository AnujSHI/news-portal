// src/components/ArticleCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({ article }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
    {article.urlToImage && (
      <img className="w-full" src={article.urlToImage} alt={article.title} />
    )}
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{article.title}</div>
      <p className="text-gray-700 text-base">{article.description}</p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <Link
        to={`/article/${encodeURIComponent(article.title)}`}
        state={{ article }}
        className="text-blue-500"
      >
        Read more
      </Link>
    </div>
  </div>
);

export default ArticleCard;
