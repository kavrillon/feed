import { shallowMount } from "@vue/test-utils";
import Header from "@/components/Header.vue";
import manifest from "../../public/manifest.json";

describe("Header", () => {
  it("should render the app title", () => {
    const wrapper = shallowMount(Header);
    expect(wrapper.find("h1").text()).toMatch(manifest.name);
  });
});
