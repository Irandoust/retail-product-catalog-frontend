import React from 'react';

interface NoResultProps {
  text: string;
}

export const NoResult: React.FC<NoResultProps> = ({ text }: NoResultProps) => {
  return (
    <div className="alert alert-info">
      <span
        className="glyphicon glyphicon-exclamation-sign"
        aria-hidden="true"
      ></span>
      <span>&nbsp;</span>
      {text}
    </div>
  );
};

export default NoResult;
