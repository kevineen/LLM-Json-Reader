import { atom } from 'recoil';

export const fontSizeAtom = atom<number>({
  key: 'fontSize',
  default: 16, // デフォルトのフォントサイズを設定
});
