<template>
  <simple-layout>
    <form @submit.prevent="submit">
      <h2 class="title">Sign in</h2>
      <v-field
        label="E-mail"
        inputType="email"
        v-model="email"
        :error="emailError"
        placeholder="Your e-mail"
        icon="fa-envelope"
      ></v-field>
      <v-field
        label="Password"
        inputType="password"
        v-model="password"
        :error="passwordError"
        placeholder="Your password"
        icon="fa-key"
      ></v-field>
      <div class="field">
        <div class="control buttons form-btns">
          <button class="button is-primary">Sign In</button>
          <router-link class="button is-light" :to="signUpPath.path">Sign Up</router-link>
        </div>
      </div>
    </form>
  </simple-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { paths } from '@/router';
import { useStore } from '@/store';
import { ActionTypes } from '@/store/actions';
import SimpleLayout from '@/layouts/SimpleLayout.vue';
import VField from '@/components/Field.vue';

export default defineComponent({
  name: 'SignIn',
  components: {
    SimpleLayout,
    VField,
  },
  setup() {
    const store = useStore();
    const email = ref('');
    const password = ref('');
    const emailError = ref('');
    const passwordError = ref('');

    function submit() {
      store.dispatch(ActionTypes.SIGN_IN, {
        email: email.value,
        password: password.value,
      });
    }

    return {
      email,
      password,
      emailError,
      passwordError,
      signUpPath: paths.signUp,
      submit,
    };
  },
});
</script>

<style lang="scss" scoped>
.form-btns {
  margin-top: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
