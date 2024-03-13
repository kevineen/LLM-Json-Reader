import { atom } from 'recoil';

export const jsonDataAtom = atom<any[]>({
  key: 'jsonData',
  default: [],
});

export const indexAtom = atom({
  key: 'index',
  default: 1,
});