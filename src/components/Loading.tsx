import React from 'react';

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
