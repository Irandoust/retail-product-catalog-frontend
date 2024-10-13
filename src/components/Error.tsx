import React from 'react';

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
