import React from 'react';
import { useRecoilValue } from 'recoil';

import { fontSizeAtom } from '@/state/atmos/fontSizeAtoms';

interface CardProps {
  title: string;
  content?: string;
  displayMode: 'selected' | 'prev' | 'next';
  onClick?: () => void;
}

export default function Card({ title, content = '', displayMode, onClick }: CardProps) {
  const fontSize = useRecoilValue(fontSizeAtom);

  const maxHeightClass = displayMode === 'selected' ? '' : 'max-h-40';
  const preClass = displayMode === 'selected' ? 'whitespace-pre-wrap break-words' : 'overflow-auto whitespace-pre-wrap';

  return (
    <div
      className={`bg-gray-100 border border-gray-300 rounded-lg p-4 shadow-md overflow-hidden cursor-pointer hover:bg-gray-200 transition-colors duration-300 ${maxHeightClass}`}
      onClick={onClick}
    >
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <pre className={`text-sm text-gray-700 ${preClass}`} style={{ fontSize: `${fontSize}px` }}>
        {displayMode === 'selected'
          ? content || 'ファイルを読み込んでください'
          : content
            ? `${content.slice(0, 100)}...`
            : 'ファイルを読み込んでください'}
      </pre>
    </div>
  );
}
