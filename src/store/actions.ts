import { RootActions } from "./types";
import { setAttributeOnHtmlTag } from "@/lib/dom";

const HTML_DARK_ATTR = "data-dark";

export const actions: RootActions = {
  setMode: ({ commit, state }, mode) => {
    commit("SET_MODE", mode);

    // Add to HTML tag (not the root div, due to style needs)
    setAttributeOnHtmlTag(HTML_DARK_ATTR, state.darkMode.toString());
  },
  switchMode: ({ commit, state }) => {
    commit("SWITCH_MODE");

    // Add to HTML tag (not the root div, due to style needs)
    setAttributeOnHtmlTag(HTML_DARK_ATTR, state.darkMode.toString());
  }
};
