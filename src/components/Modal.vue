<template>
  <teleport to="body">
    <div class="modal" :class="{ 'is-active': open }">
      <div class="modal-background"></div>
      <div class="modal-content">
        <slot></slot>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="onClose"></button>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VModal',
  props: {
    open: {
      type: Boolean,
      required: true,
    },
    onClose: {
      type: Function,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/theme/main";
@import "@/theme/values";
</style>
