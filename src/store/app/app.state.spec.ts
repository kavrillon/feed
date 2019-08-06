import { initState } from "./app.state";

describe("App State", () => {
  describe("initState", () => {
    test("inits a new state", () => {
      const state = initState();
      expect(state).toMatchObject({
        theme: "light"
      });
    });
  });
});
