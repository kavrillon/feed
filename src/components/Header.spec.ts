import { shallowMount, Wrapper } from "@vue/test-utils";
import Header from "@/components/Header.vue";
import manifest from "../../public/manifest.json";
import Vue from "vue";

describe("Header", () => {
  let wrapper: Wrapper<Header>;
  let wrapperVm: any;

  beforeEach(() => {
    wrapper = shallowMount<Header>(Header);
    wrapperVm = wrapper.vm;
  });

  describe("created", () => {
    it("should render the app title", () => {
      expect(wrapper.find("h1").text()).toMatch(manifest.name);
    });
  });

  describe("switchTheme", () => {
    it("should emit a event with the selected theme", () => {
      wrapperVm.switchTheme();
      expect(wrapper.emitted().themeChange).toBeTruthy();
    });

    // should save the mode in store
  });
});
