import { atom } from "recoil";

export const attendeeListState = atom<string[]>({
  key: 'attendeeListState',
  default: []
});