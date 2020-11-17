<template>
  <slot name="button" :click="toggleActive">
    <button
      class="button is-link is-outlined"
      @click="toggleActive"
    >
      Add new
    </button>
  </slot>
  <div class="modal" :class="{ 'is-active': isActive }">
    <div class="modal-background"></div>
    <div class="modal-content">
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
          </div>
        </div>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="toggleActive"></button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useToggle } from '@/utils';
import VField from '@/components/Field.vue';
import VSelect from '@/components/Select.vue';

export default defineComponent({
  name: 'VAddNewProduct',
  components: {
    VField,
    VSelect,
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
});
</script>
