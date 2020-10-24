<template>
  <simple-layout>
    <form @submit.prevent="submit">
      <h2 class="title">Sign Up</h2>
      <v-field
        label="Username"
        placeholder="Your username"
        inputType="text"
        v-model="userName"
        :error="userNameError"
      ></v-field>
      <v-field
        label="E-mail"
        placeholder="Your e-mail"
        inputType="email"
        v-model="email"
        :error="emailError"
      ></v-field>
      <v-field
        label="Password"
        placeholder="Your password"
        inputType="password"
        v-model="password"
        :error="passwordError"
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
import { defineComponent } from 'vue';
import { paths } from '@/router';
import SimpleLayout from '@/layouts/SimpleLayout.vue';
import VField from '@/components/Field.vue';

export default defineComponent({
  name: 'SignUp',
  components: {
    SimpleLayout,
    VField,
  },
  data() {
    return {
      signInPath: paths.signIn,
      userName: '',
      userNameError: '',
      email: '',
      emailError: '',
      password: '',
      passwordError: '',
    };
  },
  methods: {
    submit() {
      console.log('submit');
    },
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
