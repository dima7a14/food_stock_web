<template>
  <div class="simple-layout">
    <h2
      class="title simple-layout__title"
      :class="titleClass"
      v-if="title"
    >
      {{title}}
    </h2>
    <div class="box">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VSimpleLayout',
  props: {
    title: String,
    titleClass: {
      type: String,
      default: 'has-background-primary',
    },
  },
});
</script>

<style lang="scss" scoped>
.simple-layout {
  max-width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;

  &__title {
    margin-bottom: 0;
    padding: 0.75rem 1.25rem;
    color: #fff;
  }
}
</style>
