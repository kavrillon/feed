<template>
  <div class="header">
    <h1 class="header__title">{{ appName }}</h1>
    <div class="header__theme">
      <svg
        class="header__theme__svg"
        id="sunmoon"
        viewBox="0 0 108.87407 108.87405"
        :class="{ active: darkMode }"
        @click="switchMode()"
      >
        <path
          id="left"
          d="M68.18736,87.39035a35.70295,35.70295,0,1,1,.01-65.91"
          fill="none"
          stroke-linecap="round"
        />
        <path
          id="moon"
          d="M68.19731,21.48032a33.74255,33.74255,0,0,0-.01,65.91h0a35.71691,35.71691,0,0,0,.01-65.91"
          fill="none"
          stroke-linecap="round"
        />
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import manifest from "../../public/manifest.json";
import { Action, State } from "vuex-class";

@Component
export default class Header extends Vue {
  @Action switchMode: any;
  @State darkMode!: boolean;

  get appName() {
    return manifest.name;
  }
}
</script>

<style scoped lang="scss">
$svg-left: 85;
$svg-right: 91;

.header {
  &__title {
    font-size: 2rem;
  }

  &__theme {
    position: absolute;
    right: 20px;
    top: 20px;

    &__button {
      @include button;
    }

    &__svg {
      position: relative;
      width: 40px;
      stroke: var(--color-text);
      stroke-width: 5px;

      #moon {
        transition: all ease-in-out 500ms;
        stroke-dashoffset: 0;
        stroke-dasharray: $svg-right $svg-left;
      }

      &.active {
        stroke: var(--color-brand);

        &:after {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--color-brand);
          content: "";
        }

        #moon {
          stroke-dashoffset: $svg-left;
          stroke-dasharray: $svg-left $svg-right;
        }
      }
    }

    &__svg2 {
      position: relative;
      width: 400px;
      stroke: var(--color-text);
      stroke-width: 2px;

      #bigpath {
        //transition: all ease-in-out 500ms;
        stroke-dashoffset: 0;
        stroke-dasharray: 140 85;
      }

      #moonright {
        display: none;
        transition: all ease-in-out 500ms;
        stroke-dashoffset: 0;
        stroke-dasharray: $svg-right $svg-left;
      }

      &.active {
        stroke: var(--color-brand);

        &:after {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--color-brand);
          content: "";
        }

        #bigpath {
          @keyframes mymove {
            0% {
              stroke-dashoffset: 0;
              stroke-dasharray: 140 85;
            }
            /*20% {
              stroke-dashoffset: -120;
              stroke-dasharray: 40 185;
            }
            50% {
              stroke-dashoffset: -141;
              stroke-dasharray: 190 185;
            }*/
            80% {
              stroke-dasharray: 70 185;
            }
            100% {
              stroke-dashoffset: -141;
              stroke-dasharray: 230 85;
            }
          }
          animation-name: mymove;
          animation-timing-function: ease;
          animation-duration: 1800ms;
          animation-fill-mode: forwards;
        }

        #moonright {
          stroke-dashoffset: -92;
          stroke-dasharray: 80 150;
        }
      }
    }
  }
}
</style>
