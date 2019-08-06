import { AppState, AppActionContext } from "./app.types";
import { actions } from "./app.actions";
import { appStateMock1 } from "./__mocks__/app.state.mock";
import { rootStateMock1 } from "../__mocks__/state.mock";

let actionCxt: AppActionContext;
let commit: jest.Mock;
let state: AppState;

describe("App Actions", () => {
  beforeEach(() => {
    commit = jest.fn();
    state = appStateMock1();

    actionCxt = {
      state,
      commit,
      dispatch: jest.fn(),
      getters: jest.fn(),
      rootGetters: jest.fn(),
      rootState: rootStateMock1()
    };
  });

  describe("changeTheme", () => {
    it("commits 'changeTheme' with the given theme", () => {
      actions.changeTheme(actionCxt, "#TEST");
      expect(commit).toHaveBeenCalledTimes(1);
      const commitCall = commit.mock.calls[0];
      expect(commitCall[1]).toBe("#TEST");
    });
  });
});
