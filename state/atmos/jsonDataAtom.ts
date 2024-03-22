import { atom } from 'recoil';
export interface JsonData {
  ID: string;
  instruction: string;
  input: string;
  output: string;
  text: string;
}

export const jsonDataAtom = atom<JsonData[]>({
  key: 'jsonData',
  default: [],
});

export const indexAtom = atom({
  key: 'index',
  default: 0,
});
