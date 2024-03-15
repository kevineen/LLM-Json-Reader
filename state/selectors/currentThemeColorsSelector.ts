import { selector } from 'recoil';
import { themeAtom, lightThemeColors, darkThemeColors, originalThemeColors, trendy1ThemeColors, trendy2ThemeColors, trendy3ThemeColors, trendy4ThemeColors, trendy5ThemeColors } from '@/state/atmos/themeAtom';

export const currentThemeColorsSelector = selector({
  key: 'currentThemeColorsSelector',
  get: ({ get }) => {
    const themeMode = get(themeAtom);
    switch (themeMode) {
      case 'light':
        return get(lightThemeColors);
      case 'dark':
        return get(darkThemeColors);
      case 'original':
        return get(originalThemeColors);
      case 'trendy1':
        return get(trendy1ThemeColors);
      case 'trendy2':
        return get(trendy2ThemeColors);
      case 'trendy3':
        return get(trendy3ThemeColors);
      case 'trendy4':
        return get(trendy4ThemeColors);
      case 'trendy5':
        return get(trendy5ThemeColors);
      default:
        return get(lightThemeColors); // デフォルトのテーマカラー
    }
  },
});
