import { AppActions } from "./app.types";

export const actions: AppActions = {
  changeTheme: ({ commit }, theme) => {
    commit("changeTheme", theme);
  }
};
