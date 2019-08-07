import { setAttributeOnHtmlTag } from "./dom";

describe("DOM", () => {
  describe("setAttributeOnHtmlTag", () => {
    it("adds an attribute on the root document element with the given value", () => {
      if (document.firstElementChild) {
        spyOn(document.firstElementChild, "setAttribute");
        setAttributeOnHtmlTag("attr", "val");
        expect(
          document.firstElementChild.setAttribute
        ).toHaveBeenLastCalledWith("attr", "val");
      }
    });
  });
});
