import { initState } from "./state";

describe("Root State", () => {
  describe("initState", () => {
    test("inits a new state", () => {
      const state = initState();
      expect(state).toMatchObject({
        darkMode: false
      });
    });
  });
});
