import { atom } from 'recoil';

export type ThemeMode = 'light' | 'dark' | 'original';

export const themeAtom = atom<ThemeMode>({
  key: 'themeAtom',
  default: 'light',
});
