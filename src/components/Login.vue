<template>
  <div class="vue-template user-form">
    <form>
      <h3>Sign In</h3>

      <div class="form-group">
        <label>Email address</label>
        <input type="email" v-model="emailAddress" class="form-control form-control-lg" />
      </div>

      <div class="form-group">
        <label>Password</label>
        <input type="password" v-model="password" class="form-control form-control-lg" />
      </div>

      <button type="button" v-on:click="singIn()" class="btn btn-dark btn-lg btn-block">Sign In</button>

      <p class="forgot-password text-right mt-2 mb-4">
        <router-link to="/forgot-password">Forgot password ?</router-link>
      </p>

    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      emailAddress: '',
      password: ''
    }
  },
  methods: {
    singIn () {
      const data = {
        emailAddress: this.emailAddress,
        password: this.password
      }
      axios.post('users/login', data)
        .then(response => {
          this.$store.state.user = response.data
          this.$router.push({ name: 'EditProfile' })
        })
    }
  }
}
</script>
