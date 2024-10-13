import React from 'react';
import '../styles/Pagination.css';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

/**
 * Pagination Component
 * Renders a pagination control to navigate between pages.
 * Displays page numbers as buttons and "next/previous" buttons (<< and >>).
 *
 * @param {PaginationProps} totalPages - The total number of pages available
 * @param {PaginationProps} currentPage - The current active page
 * @param {PaginationProps} onPageChange - Callback function to handle page changes
 */
export const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  /**
   * Handles the page change event
   *
   * @param {number} page - The page number to switch to
   */
  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  return (
    <div className="pagination-container">
      <div className="btn-group">
        {Array.from({ length: totalPages }, (_, i) => (
          <>
            {
              // Render the "Previous" button on the first iteration
              i === 0 && (
                <button
                  key={totalPages + 2}
                  onClick={() => handlePageChange(1)}
                  disabled={currentPage === i + 1}
                  className="btn"
                >
                  <span aria-hidden="true">«</span>
                </button>
              )
            }

            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              disabled={currentPage === i + 1}
              className="btn"
            >
              {i + 1}
            </button>

            {
              // Render the "Next" button on the last iteration
              i === totalPages - 1 && (
                <button
                  key={totalPages + 1}
                  onClick={() => handlePageChange(1)}
                  disabled={currentPage === i + 1}
                  className="btn"
                >
                  <span aria-hidden="true">»</span>
                </button>
              )
            }
          </>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
