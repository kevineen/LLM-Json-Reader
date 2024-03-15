import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

export default function Button({ onClick, disabled, children }: ButtonProps) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
