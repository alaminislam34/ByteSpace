import { create } from "zustand";
import { createUISlice, type UISlice } from "./slices/ui.slice";

export type AppStore = UISlice;

export const useAppStore = create<AppStore>()((...args) => ({
  ...createUISlice(...args),
}));
