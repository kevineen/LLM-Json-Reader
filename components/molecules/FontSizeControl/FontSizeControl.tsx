import React from 'react';
import { useRecoilState } from 'recoil';

import { fontSizeAtom } from '@/state/atmos/fontSizeAtoms';

const FontSizeControl: React.FC = () => {
  const [fontSize, setFontSize] = useRecoilState(fontSizeAtom);

  const increaseFontSize = () => {
    setFontSize((prevSize) => Math.min(prevSize + 1, 40));
  };

  const decreaseFontSize = () => {
    setFontSize((prevSize) => Math.max(prevSize - 1, 12));
  };

  return (
    <div className='px-4 flex items-center'>
      <button className={`w-8 h-8 text-white text-lg rounded-full flex items-center justify-center ${fontSize === 12 ? 'bg-gray-500' : 'bg-blue-500'}`} onClick={decreaseFontSize}>
        -
      </button>
      <div className='min-w-[4rem] text-right px-4'>
        <span className="text-lg">{fontSize}px</span>
      </div>
      <button className={`w-8 h-8 bg-blue-500 text-white text-lg rounded-full flex items-center justify-center ${fontSize === 40 ? 'bg-gray-500' : 'bg-blue-500'}`} onClick={increaseFontSize}>
        +</button>
    </div>

  );
};

export default FontSizeControl;
