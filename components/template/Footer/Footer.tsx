'use client';

import { useRecoilValue } from 'recoil';
import { fileNameAtom } from '@/state/atmos/fileNameAtom';
import { lightColors, darkColors } from '@/styles/themeColorPalette';
import { themeAtom, customThemeColorsAtom } from '@/state/atmos/themeAtom';

const Footer = () => {
  const fileName = useRecoilValue(fileNameAtom);
  const theme = useRecoilValue(themeAtom);
  const customColors = useRecoilValue(customThemeColorsAtom);

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
      className="flex items-center justify-center p-4"
      style={{ backgroundColor: colors.footer, color: colors.footerText }}
    >
      {fileName || ''}
    </footer>
  );
};

export default Footer;
