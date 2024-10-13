import React from 'react';

/**
 * Loading Component
 * Displays a loading message in a Bootstrap-styled alert box.
 * Used to indicate that product data is currently being loaded.
 */
export const Loading: React.FC = () => {
  return (
    <div className="alert alert-info">
      <span className="glyphicon glyphicon-refresh" aria-hidden="true"></span>
      <span>&nbsp;</span>
      Loading procuts...
    </div>
  );
};

export default Loading;
