<template>
  <transition name="slide-fade">
    <div
      v-if="!!content"
      class="notification is-size-6 has-text-centered p-3 m-0 global-message"
      :class="{
        'is-success': status === 'success',
        'is-danger': status === 'error',
        'is-info': status === 'info',
      }"
    >
      {{content}}
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VMessage',
  computed: {
    content() {
      return this.$store.getters.message.content;
    },
    status() {
      return this.$store.getters.message.status;
    },
  },
});
</script>

<style lang="scss" scoped>
.global-message {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 3;
}

.slide-fade {
  &-enter-active {
    transition: all .3s ease-out;
  }

  &-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  &-enter-from,
  &-leave-to {
    transform: translateY(100px);
    opacity: 0;
  }
}
</style>
