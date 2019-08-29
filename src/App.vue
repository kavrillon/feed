<template>
  <div id="app" class="app">
    <router-view />
  </div>
</template>

<style lang="scss">
html,
body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  padding: 0;
}

[data-theme="light"] {
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

[data-theme="dark"] {
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

.app {
  background: var(--color-bg);
  color: var(--color-text);
}
</style>
