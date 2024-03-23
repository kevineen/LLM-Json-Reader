import React from 'react';
import { useRecoilValue } from 'recoil';
import { fontSizeAtom } from '@/state/atmos/fontSizeAtoms';
import { JsonData } from '@/state/atmos/jsonDataAtom';
import { themeAtom } from '@/state/atmos/themeAtom';
import { lightColors, darkColors } from '@/styles/themeColorPalette';

interface NowCardProps {
  data: JsonData;
}

const getColors = () => {
  const theme = useRecoilValue(themeAtom);
  switch (theme) {
    case 'light':
      return lightColors;
    case 'dark':
      return darkColors;
    default:
      return lightColors;
  }
};

const NowCard: React.FC<NowCardProps> = ({ data }) => {
  const fontSize = useRecoilValue(fontSizeAtom);
  const { cardBg, cardText } = getColors();

  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-md overflow-hidden" style={{ backgroundColor: cardBg }}>
      <h3 className="text-xl font-bold mb-2" style={{ color: cardText }}>現在のデータ</h3>
      <div className="mb-4">
        <h4 className="text-lg font-bold mb-1" style={{ color: cardText }}>Instruction</h4>
        <p style={{ fontSize: `${fontSize}px`, color: cardText }}>{data.instruction}</p>
      </div>
      <div className="mb-4">
        <h4 className="text-lg font-bold mb-1" style={{ color: cardText }}>Input</h4>
        <pre className="whitespace-pre-wrap break-words" style={{ fontSize: `${fontSize}px`, color: cardText }}>
          {data.input}
        </pre>
      </div>
      <div className="mb-4">
        <h4 className="text-lg font-bold mb-1" style={{ color: cardText }}>Output</h4>
        <p style={{ fontSize: `${fontSize}px`, color: cardText }}>{data.output}</p>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-1" style={{ color: cardText }}>Text</h4>
        <p style={{ fontSize: `${fontSize}px`, color: cardText }}>{data.text}</p>
      </div>
    </div>
  );
};

export default NowCard;