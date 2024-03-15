import { darkColors, lightColors, originalColors, trendyColors1, trendyColors2, trendyColors3, trendyColors4, trendyColors5 } from '@/styles/themeColorPalette';
import { atom } from 'recoil';

export type ThemeMode = 'light' | 'dark' | 'original' | 'trendy1' | 'trendy2' | 'trendy3' | 'trendy4' | 'trendy5';

export const themeAtom = atom<ThemeMode>({
  key: 'themeAtom',
  default: 'light',
});

export const lightThemeColors = atom({
  key: 'lightThemeColors',
  default: lightColors,
});

export const darkThemeColors = atom({
  key: 'darkThemeColors',
  default: darkColors,
});

export const originalThemeColors = atom({
  key: 'originalThemeColors',
  default: originalColors,
});

export const trendy1ThemeColors = atom({
  key: 'trendy1ThemeColors',
  default: trendyColors1,
});

export const trendy2ThemeColors = atom({
  key: 'trendy2ThemeColors',
  default: trendyColors2,
});

export const trendy3ThemeColors = atom({
  key: 'trendy3ThemeColors',
  default: trendyColors3,
});

export const trendy4ThemeColors = atom({
  key: 'trendy4ThemeColors',
  default: trendyColors4,
});

export const trendy5ThemeColors = atom({
  key: 'trendy5ThemeColors',
  default: trendyColors5,
});
