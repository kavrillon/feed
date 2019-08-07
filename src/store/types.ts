import { MutationTree, ActionContext, ActionTree } from "vuex";

/**
 * Actions
 */
export interface RootActions extends ActionTree<RootState, RootState> {}

/**
 * Context
 */
export type RootActionContext = ActionContext<RootState, RootState>;

/**
 * Mutations
 */
export interface RootMutations extends MutationTree<RootState> {}

/**
 * State
 */
export interface RootState {}
