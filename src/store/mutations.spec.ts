import { RootState } from "./types";
import { mutations } from "./mutations";
import { rootStateMock1 } from "./__mocks__/state.mock";

let state: RootState;

describe("Root Mutations", () => {
  beforeEach(() => {
    state = rootStateMock1();
  });

  describe("SWITCH_MODE", () => {
    it("changes the mode in state", () => {
      mutations.SWITCH_MODE(state);
      expect(state.darkMode).toBe(true);
    });
  });

  describe("SET_MODE", () => {
    it("set the mode in state with the given value", () => {
      mutations.SET_MODE(state, true);
      expect(state.darkMode).toBe(true);
    });
  });
});
