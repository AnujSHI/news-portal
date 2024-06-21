import React from 'react';

const Pagination = ({ page, totalPages, onPageChange }) => (
  <div className="flex justify-center my-4">
    <button
      onClick={() => onPageChange(page - 1)}
      disabled={page === 1}
      className="mx-2 p-2 bg-blue-600 text-white"
    >
      Previous
    </button>
    <span className="mx-2 p-2">
      {page} of {totalPages}
    </span>
    <button
      onClick={() => onPageChange(page + 1)}
      disabled={page === totalPages}
      className="mx-2 p-2 bg-blue-600 text-white"
    >
      Next
    </button>
  </div>
);

export default Pagination;
