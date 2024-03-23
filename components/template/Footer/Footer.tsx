'use client';

import { useRecoilValue } from 'recoil';
import { fileNameAtom } from '@/state/atmos/fileNameAtom';
import { lightColors, darkColors } from '@/styles/themeColorPalette';
import { themeAtom, customThemeColorsAtom } from '@/state/atmos/themeAtom';
import { jsonDataAtom, indexAtom } from '@/state/atmos/jsonDataAtom';
import AutoModeSelector from '@/components/molecules/AutoModeSelector/AutoModeSelector';

const Footer = () => {
  const fileName = useRecoilValue(fileNameAtom);
  const theme = useRecoilValue(themeAtom);
  const customColors = useRecoilValue(customThemeColorsAtom);
  const { data: jsonData, totalCount } = useRecoilValue(jsonDataAtom);

  const index = useRecoilValue(indexAtom);

  const getColors = () => {
    switch (theme) {
      case 'light':
        return lightColors;
      case 'dark':
        return darkColors;
      default:
        if (theme.startsWith('custom')) {
          const customIndex = parseInt(theme.replace('custom', ''), 10) - 1;
          return customColors[customIndex];
        }
        return lightColors;
    }
  };

  const colors = getColors();

  return (
    <footer
      className="flex items-center justify-between p-4"
      style={{ backgroundColor: colors.footer, color: colors.footerText }}
    >
      <div>{fileName || ''}</div>
      <div className="">
        {jsonData.length > 0 ? (
          <div className="flex">
            {/* <FontSizeControl /> */} 
            <AutoModeSelector />
          </div>
        ): (
            <div></div>
        )}
      </div>
      {jsonData.length > 0 ? (
        <div>
          <span>現在のindex: {index} / 全件数: {totalCount} 件</span>
        </div>
      ): (
        <span>LLM-JSON-READER</span>
      )
      }
    </footer>
  );
};

export default Footer;
