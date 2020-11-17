<template>
  <div class="field">
    <label v-if="label" class="label">{{label}}</label>
    <div
      class="control"
      :class="{ 'has-icons-left': !!error }"
    >
      <div class="select" :class="{ 'is-danger': !!error }">
        <select :value="modelValue" @change="$emit('update:modelValue', $event.target.value)">
          <option disabled selected :value="-1">Choose option</option>
          <option v-for="item in items" :key="item.value" :value="item.value">
            {{item.label}}
          </option>
        </select>
      </div>
      <span class="icon is-small is-right" v-if="!!error">
        <i class="fas fa-exclamation-triangle"></i>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface Item {
  value: string | number;
  label: string;
}

export default defineComponent({
  name: 'VSelect',
  props: {
    modelValue: {
      type: String || Number,
      default: -1,
    },
    label: String,
    items: {
      type: Array as PropType<Array<Item>>,
    },
    error: {
      type: String,
      default: '',
    },
  },
});
</script>
