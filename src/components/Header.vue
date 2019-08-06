<template>
  <div class="header">
    <h1 class="header__title">{{ appName }}</h1>
    <div class="header__theme">
      <button class="header__theme__button" @click="switchTheme('dark')">
        Switch
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import manifest from "../../public/manifest.json";

@Component
export default class Header extends Vue {
  get appName() {
    return manifest.name;
  }

  switchTheme(theme: String) {
    this.$emit("themeChange", theme);
  }
}
</script>

<style scoped lang="scss">
.header {
  &__title {
    font-size: 2rem;
  }
}
</style>
