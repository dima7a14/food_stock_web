<template>
  <header>
    <nav class="navbar is-light" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item" :to="routes[0].path">
          <img alt="Vue logo" src="../assets/logo.png">
        </router-link>
        <h2 class="is-size-5 current-route">{{currentRoute}}</h2>
        <div
          class="navbar-burger burger"
          :class="{ 'is-active': navExpanded }"
          @click="toggleNav"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="navbar-menu" :class="{ 'is-active': navExpanded }">
        <div class="navbar-start">
          <router-link
            class="navbar-item"
            v-for="route in routes"
            :to="route.path"
            :key="route.path"
          >
            {{route.name}}
          </router-link>
        </div>
        <div class="navbar-end">
          <div class="navbar-item auth-btns--desktop" v-if="!authenticated">
            <div class="buttons">
              <router-link class="button is-primary" :to="authRoutes.signIn.path">
                <strong>{{authRoutes.signIn.name}}</strong>
              </router-link>
              <router-link class="button is-light" :to="authRoutes.signUp.path">
                <strong>{{authRoutes.signUp.name}}</strong>
              </router-link>
            </div>
          </div>
          <hr class="auth-divider" v-if="!authenticated" />
          <router-link
            class="navbar-item auth-btns--mobile"
            :to="authRoutes.signIn.path"
            v-if="!authenticated"
          >
            {{authRoutes.signIn.name}}
          </router-link>
          <router-link
            class="navbar-item auth-btns--mobile"
            :to="authRoutes.signUp.path"
            v-if="!authenticated"
          >
            {{authRoutes.signUp.name}}
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';
import { useRoute } from 'vue-router';
import { paths } from '@/router';
import { useToggle } from '@/utils';

export default defineComponent({
  name: 'VHeader',
  setup() {
    const route = useRoute();
    const { value: navExpanded, toggle: toggleNav } = useToggle(false);

    watch(
      () => route.path,
      async () => {
        navExpanded.value = false;
      },
    );

    return {
      navExpanded,
      toggleNav,
    };
  },
  data() {
    return {
      authRoutes: {
        signIn: paths.signIn,
        signUp: paths.signUp,
      },
    };
  },
  computed: {
    authenticated() {
      return this.$store.getters.isAuthenticated;
    },
    routes() {
      const routes = [paths.root, paths.about];

      if (this.authenticated) {
        routes.push(...[
          paths.products,
          paths.operations,
          paths.requests,
        ]);
      }

      return routes;
    },
    currentRoute() {
      return this.$route.name;
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/theme/main";

.current-route {
  align-self: center;
  margin-left: 0.75rem;

  @include mobile {
    display: block;
  }

  @include desktop {
    display: none;
  }
}

.auth {
  &-btns {
    &--desktop {
      @include mobile {
        display: none;
      }
    }

    &--mobile {
      @include desktop {
        display: none;
      }
    }
  }

  &-divider {
    display: none;
    width: 100%;
    height: $navbar-divider-height;
    background-color: $navbar-divider-background-color;
    margin: 0.5rem 0;

    @include mobile {
      display: block;
    }
  }
}
</style>
