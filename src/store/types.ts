import { MutationTree, ActionContext, ActionTree } from "vuex";

/**
 * Actions
 */
export interface RootActions extends ActionTree<RootState, RootState> {
  setMode: (ctx: RootActionContext, mode: boolean) => void;
  switchMode: (ctx: RootActionContext) => void;
}

/**
 * Context
 */
export type RootActionContext = ActionContext<RootState, RootState>;

/**
 * Mutations
 */
export interface RootMutations extends MutationTree<RootState> {
  SET_MODE: (state: RootState, mode: boolean) => void;
  SWITCH_MODE: (state: RootState) => void;
}

/**
 * State
 */
export interface RootState {
  darkMode: boolean;
}
