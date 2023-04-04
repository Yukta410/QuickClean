<template>
  <div>
    <input type="password" :type="showPassword ? 'text' : 'password'" v-model="password">
    <button @click="togglePasswordVisibility">{{ showPassword ? 'Hide' : 'Show' }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: '',
      showPassword: false
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    }
  }
};
</script>
