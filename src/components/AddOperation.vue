<template>
  <slot name="button" :click="toggleActive">
    <button
      class="button is-link is-outlined"
      @click="toggleActive"
    >
      Add products
    </button>
  </slot>
  <v-modal :open="isActive" :onClose="toggleActive">
    <div class="card">
      <div class="card-content">
        <div class="content">
          <v-field
            label="Description"
            placeholder="Description"
            inputType="text"
            v-model="description"
            :error="descriptionError"
          ></v-field>
          <div class="field">
            <label class="label">Products ({{products.length}})</label>
            <div class="products-list">
              <v-product
                v-for="product in products"
                :key="product.id"
                :_id="product._id"
                :title="product.title"
                :description="product.description"
                :amount="product.amount"
                :unit="product.unit"
              ></v-product>
            </div>
            <v-add-new-product :onAdd="addProduct"></v-add-new-product>
          </div>
          <!-- <v-field
            label="Description"
            placeholder="Product description"
            inputType="text"
            v-model="description"
            :error="descriptionError"
          ></v-field>
          <hr />
          <h6 class="subtitle is-6">
            <v-field
              label="Amount"
              inputType="number"
              v-model="amount"
              :error="amountError"
            ></v-field>
            <v-select
              label="Unit"
              v-model="unit"
              :error="unitError"
              :items="unitItems"
            ></v-select>
          </h6> -->
        </div>
      </div>
    </div>
  </v-modal>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { OperationProduct } from '@/store/common';
import { useToggle } from '@/utils';
import VField from '@/components/Field.vue';
import VModal from '@/components/Modal.vue';
import VProduct from '@/components/Product.vue';
import VAddNewProduct from '@/components/AddNewProduct.vue';

export default defineComponent({
  name: 'VAddOperation',
  components: {
    VField,
    VModal,
    VProduct,
    VAddNewProduct,
  },
  setup() {
    const { value: isActive, toggle: toggleActive } = useToggle(false);

    return {
      isActive,
      toggleActive,
    };
  },
  data() {
    return {
      description: '',
      descriptionError: '',
      products: [] as OperationProduct[],
    };
  },
  methods: {
    addProduct(product: OperationProduct) {
      this.products.push(product);
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/theme/main";

.products-list {
  max-height: 30vh;
  overflow: auto;
}
</style>
