import Vuex from "vuex";
import { shallowMount, Wrapper, createLocalVue } from "@vue/test-utils";
import Header from "@/components/Header.vue";
import manifest from "../../public/manifest.json";
import { rootActionsMock } from "@/store/__mocks__/actions.mock";
import { rootStateMock1 } from "@/store/__mocks__/state.mock";

const localVue = createLocalVue();
localVue.use(Vuex);
let actions = rootActionsMock;

const store = new Vuex.Store({
  state: rootStateMock1(),
  actions
});

describe("Header", () => {
  let wrapper: Wrapper<Header>;

  beforeEach(() => {
    wrapper = shallowMount<Header>(Header, {
      store,
      localVue
    });
  });

  describe("created", () => {
    it("should render the app title", () => {
      expect(wrapper.find("h1").text()).toMatch(manifest.name);
    });
  });

  describe("click on dark mode cta", () => {
    it("call the switchMode action", () => {
      wrapper.find("#HeaderDarkModeCTA").trigger("click");
      expect(actions.switchMode.mock.calls).toHaveLength(1);
    });
  });
});
