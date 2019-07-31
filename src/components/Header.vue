<template>
  <div class="header">
    <h1 class="header__title">{{ appName }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import manifest from "../../public/manifest.json";

@Component
export default class HelloWorld extends Vue {
  get appName() {
    return manifest.name;
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
