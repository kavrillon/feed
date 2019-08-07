import { RootMutations } from "./types";

export const mutations: RootMutations = {
  SET_MODE(state, mode: boolean) {
    state.darkMode = mode;
  },
  SWITCH_MODE(state) {
    state.darkMode = !state.darkMode;
  }
};
