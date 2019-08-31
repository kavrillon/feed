import { RootState, RootActionContext } from "./types";
import { actions } from "./actions";
import { rootStateMock1 } from "./__mocks__/state.mock";

let actionCxt: RootActionContext;
let commit: jest.Mock;
let state: RootState;

describe("Root Actions", () => {
  beforeEach(() => {
    commit = jest.fn();
    state = rootStateMock1();

    actionCxt = {
      state,
      commit,
      dispatch: jest.fn(),
      getters: jest.fn(),
      rootGetters: jest.fn(),
      rootState: rootStateMock1()
    };
  });

  describe("switchMode", () => {
    it("commits 'SWITCH_MODE'", () => {
      actions.switchMode(actionCxt);
      expect(commit).toHaveBeenCalledTimes(1);
      expect(commit.mock.calls[0][0]).toBe("SWITCH_MODE");
    });
  });

  describe("setMode", () => {
    it("commits 'SET_MODE' with the given value", () => {
      actions.setMode(actionCxt, true);
      expect(commit).toHaveBeenCalledTimes(1);
      expect(commit.mock.calls[0][0]).toBe("SET_MODE");
      expect(commit.mock.calls[0][1]).toBe(true);
    });
  });
});
