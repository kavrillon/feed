<template>
  <div class="header">
    <h1 class="header__title">#feed</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {}
</script>

<style scoped lang="scss">
.header {
  &__title {
    font-size: 2rem;
  }
}
</style>
