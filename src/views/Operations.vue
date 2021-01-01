<template>
  <div class="container">
    <v-operation
      v-for="o in operations"
      :key="o._id"
      :intoStock="o.intoStock"
      :createdBy="o.createdBy"
      :products="o.products"
    ></v-operation>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from '@/store';
import { ActionTypes } from '@/store/actions';
import VOperation from '@/components/Operation.vue';

export default defineComponent({
  name: 'Operations',
  components: {
    VOperation,
  },
  setup() {
    const store = useStore();
    const operations = computed(() => store.getters.operations);

    return {
      operations,
      fetch: () => store.dispatch(ActionTypes.FETCH_OPERATIONS),
    };
  },
  mounted() {
    this.fetch();
  },
});
</script>
