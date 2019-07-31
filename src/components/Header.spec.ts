import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/Header.vue";

describe("Header.vue", () => {
  it("renders the title", () => {
    const msg = "#feed";
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.text()).toMatch(msg);
  });
});
