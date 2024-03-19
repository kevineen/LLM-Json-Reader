import { atom } from 'recoil';
import { ThemeColors } from '@/styles/themeColorPalette';

export type ThemeMode = 'light' | 'dark' | 'custom1' | 'custom2' | 'custom3' | 'custom4' | 'custom5' | 'custom6';

export const themeAtom = atom<ThemeMode>({
  key: 'themeAtom',
  default: 'light',
});

export const originalColors = {
  name: 'Ocean',
  header: '#2c3e50',
  sidebar: '#34495e',
  sidebarSelected: '#2980b9',
  sidebarHover: '#ced4da',
  main: '#ecf0f1',
  footer: '#34495e',
  text: '#E6E6E6',
  link: '#3498db',
  headerText: '#FFFFFF', // 白色
  footerText: '#FFFFFF', // 白色
  mainText: '#333333', // 暗いグレー
  sidebarText: '#FFFFFF', // 白色
};

export const trendyColors1 = {
  name: 'TikTok Marketing Partners',
  header: '#000000',
  sidebar: '#74f0ed',
  sidebarSelected: '#ea445a',
  sidebarHover: '#ced4da',
  main: '#ffffff',
  footer: '#000000',
  text: '#E6E6E6',
  link: '#EA445A',
  headerText: '#FFFFFF', // 白色
  footerText: '#FFFFFF', // 白色
  mainText: '#333333', // 暗いグレー
  sidebarText: '#333333', // 暗いグレー
};

export const trendyColors2 = {
  name: 'Bold by Nature',
  header: '#172d13',
  sidebar: '#A0522D',
  sidebarSelected: '#6bb77b',
  sidebarHover: '#ced4da',
  main: '#ffffff',
  footer: '#172d13',
  text: '#ffffff',
  link: '#d76f30',
  headerText: '#FFFFFF', // 白色
  footerText: '#FFFFFF', // 白色
  mainText: '#333333', // 暗いグレー
  sidebarText: '#333333', // 暗いグレー
};

export const trendyColors3 = {
  name: 'Amour',
  header: '#5ac3b0',
  sidebar: '#de5935',
  sidebarSelected: '#f7cd46',
  sidebarHover: '#ced4da',
  main: '#ffffff',
  footer: '#5ac3b0',
  text: '#333333',
  link: '#de5935',
  headerText: '#FFFFFF', // 白色
  footerText: '#FFFFFF', // 白色
  mainText: '#333333', // 暗いグレー
  sidebarText: '#333333', // 暗いグレー
};

export const trendyColors4 = {
  name: 'The Authentic Brief',
  header: '#B2A489',
  sidebar: '#5ebec4',
  sidebarSelected: '#f92c85',
  sidebarHover: '#ced4da',
  main: '#ffffff',
  footer: '#B2A489',
  text: '#2c3e50',
  link: '#5ebec4',
  headerText: '#FFFFFF', // 白色
  footerText: '#FFFFFF', // 白色
  mainText: '#333333', // 暗いグレー
  sidebarText: '#333333', // 暗いグレー
};

export const trendyColors5 = {
  name: '70s Inspired',
  header: '#101357',
  sidebar: '#fea49f',
  sidebarSelected: '#fbaf08',
  sidebarHover: '#ced4da',
  main: '#ffffff',
  footer: '#101357',
  text: '#000000',
  link: '#fea49f',
  headerText: '#FFFFFF', // 白色
  footerText: '#FFFFFF', // 白色
  mainText: '#333333', // 暗いグレー
  sidebarText: '#333333', // 暗いグレー
};

export const customThemeColorsAtom = atom<ThemeColors[]>({
  key: 'customThemeColorsAtom',
  default: [originalColors, trendyColors1, trendyColors2, trendyColors3, trendyColors4, trendyColors5],
});
