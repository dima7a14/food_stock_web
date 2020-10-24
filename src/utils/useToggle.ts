import { ref } from 'vue';

export default function useToggle(initial = false) {
  const value = ref(initial);

  function toggle() {
    value.value = !value.value;
  }

  return { value, toggle };
}
