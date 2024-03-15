import React from 'react';
import "./Mod.css";


const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  const pageNumbers = [];

  const maxPaginationButtons = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxPaginationButtons / 2));
  let endPage = Math.min(totalPages, startPage + maxPaginationButtons - 1);

  if (endPage - startPage + 1 < maxPaginationButtons) {
    startPage = Math.max(1, endPage - maxPaginationButtons + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
    <div className="pagemain">
    <nav>
      <ul className='pagination'>
        {currentPage > 1 && (
          <li className='page-item'>
            <button onClick={() => handlePageChange(currentPage - 1)} className='page-link'>
              Previous
            </button>
          </li>
        )}
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
            <button onClick={() => handlePageChange(number)} className='page-link'>
              {number}
            </button>
          </li>
        ))}
        {currentPage < totalPages && (
          <li className='page-item'>
            <button onClick={() => handlePageChange(currentPage + 1)} className='page-link'>
              Next
            </button>
          </li>
        )}
      </ul>
    </nav>
    </div>
    </>
  );
}

export default Pagination;
