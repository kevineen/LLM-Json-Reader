import { atom } from 'recoil';

export type AutoModeSpeed = 'off' | '3s' | '5s' | '10s' | 'custom' | 'textLength';

export const autoModeSpeedAtom = atom<AutoModeSpeed>({
  key: 'autoModeSpeed',
  default: 'off',
});

export const customSpeedAtom = atom<number>({
  key: 'customSpeed',
  default: 0,
});
