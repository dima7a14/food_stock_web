<template>
  <slot name="button" :click="toggleActive">
    <button
      class="button is-link is-outlined"
      @click="toggleActive"
    >
      Add new
    </button>
  </slot>
  <v-modal :open="isActive" :onClose="toggleActive">
    <div class="card">
      <div class="card-content">
        <div class="content">
          <v-field
            label="Title"
            placeholder="Product title"
            inputType="text"
            v-model="title"
            :error="titleError"
          ></v-field>
          <v-field
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
          </h6>
          <button class="button is-primary" @click="addProduct">Add</button>
        </div>
      </div>
    </div>
  </v-modal>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useToggle } from '@/utils';
import VModal from '@/components/Modal.vue';
import VField from '@/components/Field.vue';
import VSelect from '@/components/Select.vue';

export default defineComponent({
  name: 'VAddNewProduct',
  components: {
    VModal,
    VField,
    VSelect,
  },
  props: {
    onAdd: {
      type: Function,
      required: true,
    },
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
      title: '',
      titleError: '',
      description: '',
      descriptionError: '',
      amount: 0,
      amountError: '',
      unit: '',
      unitError: '',
      unitItems: [
        { value: '', label: 'Pieces' },
        { value: 'kg', label: 'kilogram' },
        { value: 'l', label: 'liter' },
      ],
    };
  },
  methods: {
    addProduct() {
      this.onAdd({
        title: this.title,
        description: this.description,
        amount: this.amount,
        unit: this.unit,
      });

      this.title = '';
      this.description = '';
      this.amount = 0;
      this.unit = '';
    },
  },
});
</script>
