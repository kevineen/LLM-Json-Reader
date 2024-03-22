import { atom } from 'recoil';
export interface JsonData {
  ID: string;
  instruction: string;
  input: string;
  output: string;
  text: string;
}

export interface JsonDataState {
  data: JsonData[];
  totalCount: number;
  [index: number]: JsonData; // インデックスシグネチャを追加
}

export const jsonDataAtom = atom<JsonDataState>({
  key: 'jsonData',
  default: {
    data: [],
    totalCount: 0,
  },
});

export const indexAtom = atom({
  key: 'index',
  default: 0,
});

export const chunkSizeAtom = atom({
  key: 'chunkSize',
  default: 1000, // 初期値は1000件
});

export const isLoadingMoreAtom = atom({
  key: 'isLoadingMore',
  default: false,
});

export const isLargeFileAtom = atom<boolean>({
  key: 'isLargeFile',
  default: false,
});
export interface FileAtom extends File {
  path?: string;
}

export const fileAtom = atom<FileAtom | null>({
  key: 'file',
  default: null,
});

export const renderedDataAtom = atom<JsonData[]>({
  key: 'renderedData',
  default: [],
});