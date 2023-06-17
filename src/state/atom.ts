import { atom } from "recoil";

export const attendeeListState = atom<string[]>({
  key: 'attendeeListState',
  default: []
});

export const errorState = atom<string>({
  key: 'errorState',
  default: ''
});

export const resultShuffle = atom<Map<string, string>>({
  key: 'resultShuffle',
  default: new Map()
});