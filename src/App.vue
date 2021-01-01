<template>
  <main class="app">
    <v-header></v-header>
    <section class="section container main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </section>
    <v-message></v-message>
    <v-progress></v-progress>
    <v-footer></v-footer>
  </main>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';
import { useRouter } from 'vue-router';

import { useStore } from '@/store';
import { paths } from '@/router';
import VHeader from '@/components/Header.vue';
import VFooter from '@/components/Footer.vue';
import VMessage from '@/components/Message.vue';
import VProgress from '@/components/Progress.vue';

export default defineComponent({
  name: 'App',
  components: {
    VHeader,
    VFooter,
    VMessage,
    VProgress,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    function getAllowedRoute(isAuthenticated: boolean) {
      const route = isAuthenticated ? paths.products.path : paths.signIn.path;

      return route;
    }

    router.push(getAllowedRoute(store.getters.isAuthenticated));

    watch(
      () => store.getters.isAuthenticated,
      (isAuthenticated) => {
        router.push(getAllowedRoute(isAuthenticated));
      },
    );
  },
});

</script>

<style lang="scss">
@import "@/theme/main";
@import "@/theme/values";

.app {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  background-color: $grey-lightest;
}

.main-content {
  flex-grow: 1;
  max-width: 100%;
  display: flex;
  padding: 1.5rem;
  flex-direction: column;
  justify-content: flex-start;
  overflow: auto;
}
</style>
