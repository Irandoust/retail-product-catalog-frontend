import React from 'react';

/**
 * Error Component
 * Displays an error message in a Bootstrap-styled alert box.
 * Used when there is a failure to fetch products or other errors.
 */
export const Error: React.FC = () => {
  return (
    <div className="alert alert-danger">
      <span
        className="glyphicon glyphicon-exclamation-sign"
        aria-hidden="true"
      ></span>
      <span>&nbsp;</span>
      Error fetching products.
    </div>
  );
};

export default Error;
