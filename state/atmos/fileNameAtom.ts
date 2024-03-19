import { atom } from 'recoil';

export const fileNameAtom = atom<string>({
  key: 'fileName',
  default: '',
});
