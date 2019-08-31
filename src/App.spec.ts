import { shallowMount, Wrapper, createLocalVue } from "@vue/test-utils";
import App from "./App.vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import { rootStateMock1 } from "./store/__mocks__/state.mock";
import { rootActionsMock } from "./store/__mocks__/actions.mock";

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(Vuex);
let actions = rootActionsMock;

const router = new VueRouter();
const store = new Vuex.Store({
  state: rootStateMock1(),
  actions
});

describe("App", () => {
  beforeEach(() => {
    shallowMount<App>(App, {
      store,
      localVue,
      router
    });
  });

  describe("mounted", () => {
    it("should set the default mode", () => {
      expect(actions.setMode.mock.calls).toHaveLength(1);
    });
  });
});
