<template>
  <footer class="footer">
    <button class="button is-danger">
      <span class="icon is-small">
        <i class="fas fa-minus"></i>
      </span>
      <span>Remove products</span>
    </button>
    <v-add-operation>
      <template v-slot:button="slotProps">
        <button class="button is-primary" @click="slotProps.click">
          <span class="icon is-small">
            <i class="fas fa-plus"></i>
          </span>
          <span>Add products</span>
        </button>
      </template>
    </v-add-operation>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VAddOperation from '@/components/AddOperation.vue';

export default defineComponent({
  name: 'VFooter',
  components: {
    VAddOperation,
  },
});
</script>

<style lang="scss" scoped>
@import "@/theme/main";
@import "@/theme/values";

.footer {
  height: $footer-height;
  min-height: $footer-height;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: $white;
  box-shadow: 0 -1px 1px $grey-lighter;
  z-index: 1;
}
</style>
