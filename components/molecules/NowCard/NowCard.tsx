import React from 'react';
import { useRecoilValue } from 'recoil';
import { fontSizeAtom } from '@/state/atmos/fontSizeAtoms';
import { JsonData } from '@/state/atmos/jsonDataAtom';

interface NowCardProps {
  data: JsonData;
}

const NowCard: React.FC<NowCardProps> = ({ data }) => {
  const fontSize = useRecoilValue(fontSizeAtom);

  return (
    <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 shadow-md overflow-hidden">
      <h3 className="text-xl font-bold mb-2 text-gray-800">現在のデータ</h3>
      <div className="mb-4">
        <h4 className="text-lg font-bold mb-1">Input</h4>
        <pre className="whitespace-pre-wrap break-words" style={{ fontSize: `${fontSize}px` }}>
          {data.input}
        </pre>
      </div>
      <div className="mb-4">
        <h4 className="text-lg font-bold mb-1">Instruction</h4>
        <p className="text-gray-700" style={{ fontSize: `${fontSize}px` }}>{data.instruction}</p>
      </div>
      <div className="mb-4">
        <h4 className="text-lg font-bold mb-1">Output</h4>
        <p className="text-gray-700" style={{ fontSize: `${fontSize}px` }}>{data.output}</p>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-1">Text</h4>
        <p className="text-gray-700" style={{ fontSize: `${fontSize}px` }}>{data.text}</p>
      </div>
    </div>
  );
};

export default NowCard;