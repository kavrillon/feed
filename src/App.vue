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

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
}
</style>
