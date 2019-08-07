<template>
  <div id="app" class="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action, State } from "vuex-class";

@Component
export default class App extends Vue {
  @Action setMode: any;
  @State darkMode!: boolean;

  mounted() {
    this.setMode(this.darkMode);
  }
}
</script>

<style lang="scss">
html,
body {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  padding: 0;
}

html[data-dark="false"] {
  --color-bg: #ffffff;
  --color-bg-highlight: #f5f2ec;
  --color-brand: #bea761;
  --color-brand-highlight: #f6ead1;
  --color-text: #1e152a;
  --color-text-lighter: #7f7f7f;
  --color-alt: #9e2d3a;
  --color-heading: #1e152a;
  --color-blockquote: #9e2d3a;
  --color-highlight: #f5f2ec;
}

html[data-dark="true"] {
  --color-bg: #000000;
  --color-bg-highlight: #13131b;
  --color-brand: #bea761;
  --color-brand-highlight: #353022;
  --color-brand-darkest-faded: #27251f;
  --color-alt: #9e2d3a;
  --color-text: #aeaca9;
  --color-text-lighter: #7f7f7f;
  --color-bold: #bbbbbb;
  --color-heading: #efefef;
  --color-blockquote: #7e2b34;
  --color-highlight: #222234;
}

body {
  background: var(--color-bg);
  color: var(--color-text);
}

.app {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  transition: color 0.5s ease-out 0s, background 0.5s ease-out 0s;
}
</style>
