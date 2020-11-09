<template>
  <transition name="fade">
    <div v-if="show" class="global-loading-overlay">
      <!-- <progress
        class="progress is-primary global-loading"
        max="100"
      ></progress> -->
      <div class="loader"></div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VProgress',
  computed: {
    show() {
      return this.$store.getters.isLoading;
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/theme/values";

.global-loading-overlay {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: calc(100vh - #{$header-height});
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
}

.loader {
  color: #ffffff;
  font-size: 48px;
  text-indent: -9999em;
  overflow: hidden;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  margin: 72px auto;
  border: none;
  position: relative;
  animation: loader 1.7s infinite ease, round 1.7s infinite ease;
}

@keyframes loader {
  0% {
    box-shadow: 0 -0.83em 0 -0.4em,
      0 -0.83em 0 -0.42em,
      0 -0.83em 0 -0.44em,
      0 -0.83em 0 -0.46em,
      0 -0.83em 0 -0.477em;
  }
  5%,
  95% {
    box-shadow: 0 -0.83em 0 -0.4em,
      0 -0.83em 0 -0.42em,
      0 -0.83em 0 -0.44em,
      0 -0.83em 0 -0.46em,
      0 -0.83em 0 -0.477em;
  }
  10%,
  59% {
    box-shadow: 0 -0.83em 0 -0.4em,
      -0.087em -0.825em 0 -0.42em,
      -0.173em -0.812em 0 -0.44em,
      -0.256em -0.789em 0 -0.46em,
      -0.297em -0.775em 0 -0.477em;
  }
  20% {
    box-shadow: 0 -0.83em 0 -0.4em,
      -0.338em -0.758em 0 -0.42em,
      -0.555em -0.617em 0 -0.44em,
      -0.671em -0.488em 0 -0.46em,
      -0.749em -0.34em 0 -0.477em;
  }
  38% {
    box-shadow: 0 -0.83em 0 -0.4em,
      -0.377em -0.74em 0 -0.42em,
      -0.645em -0.522em 0 -0.44em,
      -0.775em -0.297em 0 -0.46em,
      -0.82em -0.09em 0 -0.477em;
  }
  100% {
    box-shadow: 0 -0.83em 0 -0.4em,
      0 -0.83em 0 -0.42em,
      0 -0.83em 0 -0.44em,
      0 -0.83em 0 -0.46em,
      0 -0.83em 0 -0.477em;
  }
}

@keyframes round {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.global-loading {
  width: 100%;
  height: 1rem;
}

.fade {
  &-enter-active {
    transition: all .3s ease-out;
  }

  &-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
  }
}
</style>
