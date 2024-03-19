import { atom } from 'recoil';

// dolly json 用
// export const jsonDataAtom = atom<any[]>({
//   key: 'jsonData',
//   default: [],
// });

// llm json eval用
export const jsonDataAtom = atom<{
  instruction: string;
  output_length: number;
  metrics: string[];
  few_shots: any[];
  samples: { input: string; output: string }[];
}>({
  key: 'jsonData',
  default: {
    instruction: '',
    output_length: 0,
    metrics: [],
    few_shots: [],
    samples: [],
  },
});

export const indexAtom = atom({
  key: 'index',
  default: 0,
});
