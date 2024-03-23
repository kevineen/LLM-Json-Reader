import React from 'react';

interface ArrowButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  direction: 'left' | 'right';
}

export default function ArrowButton({ onClick, disabled, direction }: ArrowButtonProps) {
  const arrowIcon = direction === 'left' ? '← (左・上矢印キー)' : '→ (右・下矢印キー)';

  return (
    <button
      className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-2 rounded"
      onClick={onClick}
      disabled={disabled}
    >
      {arrowIcon}
    </button>
  );
}