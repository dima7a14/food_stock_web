<template>
  <div class="field">
    <label v-if="label" class="label">{{label}}</label>
    <div
      class="control"
      :class="{ 'has-icons-left': icon, 'has-icons-right': !!error }"
    >
      <input
        :type="inputType"
        class="input"
        :class="{ 'is-danger': !!error }"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <span v-if="icon" class="icon is-small is-left">
        <i class="fas" :class="icon"></i>
      </span>
      <span class="icon is-small is-right" v-if="!!error">
        <i class="fas fa-exclamation-triangle"></i>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VField',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    inputType: {
      type: String,
      required: true,
      validator(value: string) {
        return ['text', 'email', 'password', 'number'].indexOf(value) !== -1;
      },
    },
    placeholder: {
      type: String,
      default: '',
    },
    icon: String,
    error: {
      type: String,
      default: '',
    },
  },
});
</script>
