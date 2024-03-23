import React from 'react';
import { useRecoilValue } from 'recoil';

import { fontSizeAtom } from '@/state/atmos/fontSizeAtoms';
import { lightColors, darkColors } from '@/styles/themeColorPalette';
import { themeAtom } from '@/state/atmos/themeAtom';

interface CardProps {
  title: string;
  content?: string;
  displayMode: 'selected' | 'prev' | 'next';
  onClick?: () => void;
}

export default function Card({ title, content = '', displayMode, onClick }: CardProps) {
  const fontSize = useRecoilValue(fontSizeAtom);
  const theme = useRecoilValue(themeAtom);
  const lineHeight = fontSize * 1.5; // フォントサイズの1.5倍の値を行間隔に設定

  // const maxHeightClass = displayMode === 'selected' ? '' : 'max-h-40';
  const preClass = displayMode === 'selected' ? 'whitespace-pre-wrap break-words' : 'overflow-auto whitespace-pre-wrap';

  const getColors = () => {
    switch (theme) {
      case 'light':
        return lightColors;
      case 'dark':
        return darkColors;
      default:
        return lightColors;
    }
  };

  const { cardBg, cardText } = getColors();

  return (
    <div
      className={`border border-gray-300 rounded-lg p-4 shadow-md overflow-hidden cursor-pointer transition-colors duration-300`}
      style={{ backgroundColor: cardBg, color: cardText }}
      onClick={onClick}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <pre className={`text-sm ${preClass}`} style={{ fontSize: `${fontSize}px`, lineHeight: `${lineHeight}px` }}>
        {displayMode === 'selected'
          ? content || 'ファイルを読み込んでください'
          : content
            ? `${content.slice(0, 100)}...`
            : 'ファイルを読み込んでください'}
      </pre>
    </div>
  );
}