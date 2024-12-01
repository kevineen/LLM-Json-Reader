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
      {Object.entries(data).map(([key, value]) => (
        <div key={key} className="mb-4">
          <h4 className="text-lg font-bold mb-1" style={{ color: cardText }}>{key}</h4>
          {/* valueが文字列でない場合の処理を追加 */}
          {typeof value === 'string' ? (
            <pre className="whitespace-pre-wrap break-words" style={{ fontSize: `${fontSize}px`, color: cardText }}>
              {value}
            </pre>
            ) : (
            <pre className="whitespace-pre-wrap break-words" style={{ fontSize: `${fontSize}px`, color: cardText }}>
            {JSON.stringify(value, null, 2)}
          </pre>
          )}
        </div>
      ))}
    </div>
  );
};

export default NowCard;