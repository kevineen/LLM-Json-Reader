import { atom } from 'recoil';

export const folderState = atom<string | null>({
  key: 'folderState',
  default: null,
});
