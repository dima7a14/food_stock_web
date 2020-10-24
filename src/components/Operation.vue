<template>
  <article
    class="panel"
    :class="{ 'is-primary': intoStock, 'is-danger': !intoStock }"
  >
    <header class="panel-heading" v-if="intoStock">Income</header>
    <header class="panel-heading" v-else>Expense</header>
    <section class="operation-body">
      <div class="panel-block">
        <h6>Created by: {{createdBy}}</h6>
      </div>
      <product
        v-for="product in products"
        :key="product._id"
        :_id="product._id"
        :title="product.title"
        :description="product.description"
        :amount="product.amount"
        :unit="product.unit"
      ></product>
    </section>
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Product from '@/components/Product.vue';

interface Product {
  _id: string;
  title: string;
  description: string;
  amount: number;
  unit: string;
}

export default defineComponent({
  name: 'VOperation',
  components: {
    Product,
  },
  props: {
    intoStock: {
      type: Boolean,
      required: true,
    },
    createdBy: {
      type: String,
      required: true,
    },
    products: {
      type: Array as PropType<Product[]>,
      default() {
        return [];
      },
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/theme/main";

.operation-body {
  background-color: $white;
}
</style>
