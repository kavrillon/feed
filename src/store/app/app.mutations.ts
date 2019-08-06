import { AppMutations } from "./app.types";

export const mutations: AppMutations = {
  changeTheme(state, theme) {
    state.theme = theme;
  }
};
