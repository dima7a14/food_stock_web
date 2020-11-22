<template>
  <article class="panel is-primary">
    <header class="panel-heading">Products</header>
    <section class="products-body">
      <div class="panel-block">
        <div class="control has-icons-left">
          <input class="input is-primary" type="text" placeholder="Search">
          <span class="icon is-left">
            <i class="fas fa-search" aria-hidden="true"></i>
          </span>
        </div>
      </div>
      <div class="products-list">
        <product
          v-for="product in products"
          :key="product._id"
          :_id="product._id"
          :title="product.title"
          :description="product.description"
          :amount="product.amount"
          :unit="product.unit"
        ></product>
      </div>
      <div class="panel-block">
        <add-new-product>
          <template v-slot:button="slotProps">
            <button
              class="button is-link is-outlined is-fullwidth"
              @click="slotProps.click"
            >
              Add new
            </button>
          </template>
        </add-new-product>
      </div>
    </section>
  </article>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from '@/store';
import { ActionTypes } from '@/store/actions';
import Product from '@/components/Product.vue';
import AddNewProduct from '@/components/AddNewProduct.vue';

export default defineComponent({
  name: 'Products',
  components: {
    Product,
    AddNewProduct,
  },
  setup() {
    const store = useStore();
    const products = computed(() => store.getters.products);

    return {
      products,
      fetch: () => store.dispatch(ActionTypes.FETCH_PRODUCTS),
    };
  },
  mounted() {
    this.fetch();
  },
});
</script>

<style lang="scss" scoped>
@import "@/theme/main";

.products-body {
  background-color: $white;
}

.products-list {
  overflow: scroll;
  max-height: 50vh;
}
</style>
