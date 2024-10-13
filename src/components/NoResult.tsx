import React from 'react';

interface NoResultProps {
  text: string;
}

/**
 * NoResult Component
 * Displays a message when no search results or data are found.
 * The message is passed as a prop and shown inside a Bootstrap-styled alert box.
 *
 * @param {NoResultProps} text - The message to be displayed in the alert box
 */
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
