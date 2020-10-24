<template>
  <v-header></v-header>
  <section class="section container is-widescreen main-content">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import VHeader from '@/components/Header.vue';

export default defineComponent({
  name: 'App',
  components: {
    VHeader,
  },
});

</script>

<style lang="scss">
@import "@/theme/main";
#app {
  width: 100vw;
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  background-color: $grey-lightest;
}

.main-content {
  flex-grow: 2;
}
</style>
