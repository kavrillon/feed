import { actions } from "./app.actions";
import { mutations } from "./app.mutations";
import { initState } from "./app.state";
import { AppModule } from "./app.types";

export const appModule: AppModule = {
  actions,
  mutations,
  namespaced: true,
  state: initState()
};

export * from "./app.const";
export * from "./app.types";
