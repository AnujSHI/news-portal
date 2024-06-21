import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const ArticleDetail = () => {
  const { state } = useLocation();
  const { article } = state;

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-lg rounded">
      <h2 className="text-3xl font-bold mb-4">{article.title}</h2>
      {article.urlToImage && (
        <img className="w-full mb-4" src={article.urlToImage} alt={article.title} />
      )}
      <p className="text-gray-700 mb-4">{article.content}</p>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500"
      >
        Read the full article
      </a>
      <div className="mt-4">
        <Link to="/" className="text-blue-500">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ArticleDetail;
