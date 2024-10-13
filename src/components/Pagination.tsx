import React from 'react';
import '../styles/Pagination.css';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  console.log(totalPages, currentPage, onPageChange);

  return (
    <div className="pagination-container">
      <div className="btn-group">
        {Array.from({ length: totalPages }, (_, i) => (
          <>
            {i === 0 && (
              <button
                key={totalPages + 2}
                onClick={() => handlePageChange(1)}
                disabled={currentPage === i + 1}
                className="btn"
              >
                <span aria-hidden="true">«</span>
              </button>
            )}

            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              disabled={currentPage === i + 1}
              className="btn"
            >
              {i + 1}
            </button>

            {i === totalPages - 1 && (
              <button
                key={totalPages + 1}
                onClick={() => handlePageChange(1)}
                disabled={currentPage === i + 1}
                className="btn"
              >
                <span aria-hidden="true">»</span>
              </button>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
