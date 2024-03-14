import React from 'react';

interface CardProps {
  title: string;
  content: string;
  displayMode: 'selected' | 'prev' | 'next';
  onClick?: () => void;
}

export default function Card({ title, content, onClick }: CardProps) {
  return (
    <div
      className="bg-gray-100 border border-gray-300 rounded-lg p-4 shadow-md overflow-hidden cursor-pointer hover:bg-gray-200 transition-colors duration-300"
      onClick={onClick}
    >
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <pre className="text-sm text-gray-700">{content}</pre>
    </div>
  );
}