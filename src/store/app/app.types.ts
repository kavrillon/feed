import { MutationTree, ActionTree, ActionContext } from "vuex";
import { RootState } from "../types";

/**
 * Actions
 */
export interface AppActions extends ActionTree<AppState, RootState> {
  changeTheme: (ctx: AppActionContext, theme: string) => void;
}

/**
 * Context
 */
export type AppActionContext = ActionContext<AppState, RootState>;

/**
 * Module
 */
export interface AppModule {
  namespaced: boolean;
  state: AppState;
  mutations: AppMutations;
  actions: AppActions;
}

/**
 * Mutations
 */
export interface AppMutations extends MutationTree<AppState> {
  changeTheme: (state: AppState, theme: string) => void;
}

/**
 * State
 */
export interface AppState {
  theme: string;
}
