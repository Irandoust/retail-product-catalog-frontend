import React from 'react';

interface ErrorProps {
  text: string;
}

/**
 * Error Component
 *
 * This component displays an error message within a styled Bootstrap alert box.
 * It is typically used to show error messages when a failure occurs, such as
 * when a network request to fetch products fails.
 *
 * Props:
 * - text: The error message to be displayed.
 *
 * @param {ErrorProps} props - The props containing the error message.
 * @returns {JSX.Element} A styled alert box displaying the error message.
 */
export const Error: React.FC<ErrorProps> = ({ text }: ErrorProps) => {
  return (
    <div className="alert alert-danger">
      <span
        className="glyphicon glyphicon-exclamation-sign"
        aria-hidden="true"
      ></span>
      <span>&nbsp;</span>
      {text}
    </div>
  );
};

export default Error;
