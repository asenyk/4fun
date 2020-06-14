<template>
  <div class="vue-template user-form">
    <form>
      <h3>Sign Up</h3>

      <div class="form-group">
        <label>First Name</label>
        <input type="text" class="form-control form-control-lg" v-model="firstName"/>
      </div>

      <div class="form-group">
        <label>Last Name</label>
        <input type="text" class="form-control form-control-lg" v-model="lastName"/>
      </div>

      <div class="form-group">
        <label>Email address</label>
        <input type="email" class="form-control form-control-lg" v-model="emailAddress"/>
      </div>

      <div class="form-group">
        <label>Phone Number</label>
        <input type="tel" pattern='01[0-9]{9}' class="form-control form-control-lg" v-model="phoneNumber"/>
      </div>

      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control form-control-lg" v-model="password"/>
      </div>

      <button type="button" class="btn btn-dark btn-lg btn-block" @click="addData()">Sign Up</button>

      <p class="forgot-password text-right">
        Already registered
        <router-link :to="{name: 'Login'}">sign in?</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Signup',
  data () {
    return {
      firstName: '',
      lastName: '',
      emailAddress: '',
      phoneNumber: '',
      password: ''
    }
  },
  methods: {
    addData () {
      const data = {
        firstName: this.firstName,
        lastName: this.lastName,
        emailAddress: this.emailAddress,
        phoneNumber: this.phoneNumber,
        password: this.password
      }
      axios.post('users', data)
        .then(response => {
          console.log(response)
        })
    }
  }
}
</script>
