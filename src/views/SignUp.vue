<template>
  <simple-layout title="Sign up">
    <form @submit.prevent="submit">
      <v-field
        label="E-mail"
        inputType="email"
        placeholder="Your e-mail"
        v-model="email"
        :error="emailError"
        icon="fa-envelope"
      ></v-field>
      <v-field
        label="Password"
        placeholder="Your password"
        inputType="password"
        v-model="password"
        :error="passwordError"
        icon="fa-key"
      ></v-field>
      <div class="field">
        <div class="control buttons form-btns">
          <button class="button is-primary">Sign Up</button>
          <router-link class="button is-light" :to="signInPath.path">Sign In</router-link>
        </div>
      </div>
    </form>
  </simple-layout>
</template>

<script type="ts">
import { defineComponent, ref } from 'vue';
import { paths } from '@/router';
import { useStore } from '@/store';
import { ActionTypes } from '@/store/actions';
import SimpleLayout from '@/layouts/SimpleLayout.vue';
import VField from '@/components/Field.vue';

export default defineComponent({
  name: 'SignUp',
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
      store.dispatch(ActionTypes.SIGN_UP, {
        email: email.value,
        password: password.value,
      });
    }

    return {
      email,
      password,
      emailError,
      passwordError,
      signInPath: paths.signIn,
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
