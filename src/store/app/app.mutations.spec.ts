import { AppState } from "./app.types";
import { mutations } from "./app.mutations";
import { appStateMock1 } from "./__mocks__/app.state.mock";

let state: AppState;

describe("App Mutations", () => {
  beforeEach(() => {
    state = appStateMock1();
  });

  describe("changeTheme", () => {
    it("changes the theme", () => {
      mutations.changeTheme(state, "#TEST");
      expect(state.theme).toBe("#TEST");
    });
  });
});
