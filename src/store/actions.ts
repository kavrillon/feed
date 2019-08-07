import { RootActions } from "./types";

export const actions: RootActions = {
  setMode: ({ commit, state }, mode) => {
    commit("SET_MODE", mode);
  },
  switchMode: ({ commit, state }) => {
    commit("SWITCH_MODE");
  }
};
