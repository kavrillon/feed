<template>
  <div class="header">
    <h1 class="header__title">{{ appName }}</h1>
    <h2 class="header__subtitle">{{ $t("translation.hello") }}</h2>

    <ul class="header__locale">
      <li class="header__locale__item">
        <router-link class="header__locale__item__link" to="/fr"
          >fr</router-link
        >
      </li>
      <li class="header__locale__item">
        <router-link class="header__locale__item__link" to="/en"
          >en</router-link
        >
      </li>
      <li class="header__locale__item">
        <router-link class="header__locale__item__link" to="/ja"
          >ja</router-link
        >
      </li>
    </ul>
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

  &__locale {
    list-style: none;

    &__item {
      display: inline-block;
      margin: 0 5px;
    }
  }
}
</style>
