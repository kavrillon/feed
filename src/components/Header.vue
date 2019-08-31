<template>
  <div class="header">
    <h1 class="header__title">{{ appName }}</h1>
    <div class="header__theme">
      <button
        class="header__theme__button"
        id="HeaderDarkModeCTA"
        @click="switchMode()"
      >
        Switch
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import manifest from "../../public/manifest.json";
import { Action } from "vuex-class";

@Component
export default class Header extends Vue {
  @Action switchMode: any;

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
