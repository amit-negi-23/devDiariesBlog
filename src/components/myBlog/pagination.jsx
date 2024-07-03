import React from 'react';
import { Pagination } from 'react-bootstrap';

const PaginationComponent = ({ itemsPerPage, totalItems, currentPage, paginate }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  } else {
    if (currentPage <= 3) {
      pageNumbers.push(1, 2, 3, 4, '...', totalPages);
    } else if (currentPage > 3 && currentPage < totalPages - 2) {
      pageNumbers.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
    } else {
      pageNumbers.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
    }
  }

  return (
    <Pagination>
      <Pagination.Prev
        onClick={() => currentPage > 1 && paginate(currentPage - 1)}
        disabled={currentPage === 1}
      />
      {pageNumbers.map((number, index) => (
        <React.Fragment key={index}>
          {number === '...' ? (
            <Pagination.Ellipsis disabled />
          ) : (
            <Pagination.Item
              active={number === currentPage}
              onClick={() => paginate(number)}
            >
              {number}
            </Pagination.Item>
          )}
        </React.Fragment>
      ))}
      <Pagination.Next
        onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
      />
    </Pagination>
  );
};

export default PaginationComponent;