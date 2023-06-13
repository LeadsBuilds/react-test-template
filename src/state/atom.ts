import { atom } from "recoil";

export const attendeeListState = atom<string[]>({
  key: 'attendeeListState',
  default: []
});

export const errorState = atom<string>({
  key: 'errorState',
  default: ''
});