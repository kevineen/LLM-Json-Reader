import { atom } from 'recoil';

export const errorMessageAtom = atom<string>({
  key: 'errorMessage',
  default: '',
});