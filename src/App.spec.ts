import { shallowMount, Wrapper, createLocalVue } from "@vue/test-utils";
import App from "./App.vue";
import VueRouter from "vue-router";
import Vuex, { Store } from "vuex";
import { rootStateMock1 } from "./store/__mocks__/state.mock";
import { appModule } from "./store/app";

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(Vuex);

const router = new VueRouter();
const store = new Vuex.Store({
  state: rootStateMock1,
  modules: {
    app: appModule
  }
});

describe("App", () => {
  let wrapper: Wrapper<App>;
  let wrapperVm: any;

  beforeEach(() => {
    wrapper = shallowMount<App>(App, {
      store,
      localVue,
      router
    });
    wrapperVm = wrapper.vm;
  });

  describe("created", () => {
    it("should set the default theme to light", () => {
      expect(wrapper.attributes("data-theme")).toBe("light");
    });
  });

  describe("setTheme", () => {
    beforeEach(() => {
      wrapperVm.setTheme("dark");
    });

    it("should call a store mutation", () => {
      expect(1).toBe(2);
    });

    it("should update the DOM attribute", done => {
      wrapperVm.$nextTick(() => {
        expect(wrapper.attributes("data-theme")).toBe("dark");
        done();
      });
    });
  });
});
