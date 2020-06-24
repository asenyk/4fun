<template>
  <div class="vue-template user-form">
    <form>
      <!--      @submit.prevent="handleSubmit"-->
      <h3>Sign Up</h3>

      <div class="form-group">
        <label>First Name</label>
        <input type="text" class="form-control form-control-lg" v-model="user.firstName"/>
      </div>

      <div class="form-group">
        <label>Last Name</label>
        <input type="text" class="form-control form-control-lg" v-model="user.lastName"/>
      </div>

      <div class="form-group">
        <label>Email address</label>

        <input
          type="email"
          class="form-control form-control-lg" :class="{ 'is-invalid': submitted && $v.user.emailAddress.$error }"
          v-model="user.emailAddress"
          @blur="$v.user.emailAddress.$touch()"
        />
      </div>
      <div v-if="$v.user.emailAddress.$error" class="error">
        <span v-if="!$v.user.emailAddress.required || $v.$touch()">Email is required</span>
        <span v-else>Email is invalid</span>
      </div>

      <div class="form-group">
        <label>Phone Number</label>
        <input type="tel" class="form-control form-control-lg"
               :class="{ 'is-invalid': submitted && $v.user.phoneNumber.$error }"
               v-model="user.phoneNumber"
               @blur="$v.user.phoneNumber.$touch()"
        />
      </div>
      <div v-if="$v.user.phoneNumber.$error" class="error">
        <span v-if="!$v.user.phoneNumber.required || $v.$touch()"> phone is required</span>
        <span v-if="!$v.user.phoneNumber.numeric"> Its not a number</span>
        <span v-if="!$v.user.phoneNumber.maxLength || !$v.user.phoneNumber.minLength"> Number must have 10 numbers  </span>
        <span v-else>phone is invalid</span>
      </div>

      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control form-control-lg" v-model="user.password"/>
      </div>

      <div class="form-group">
        <label>Confirm Password</label>
        <input type="password" class="form-control form-control-lg" v-model="user.confirmPassword"/>
      </div>

      <button type="button" :disabled="$v.$invalid"
              class="btn btn-dark btn-lg btn-block"
              @click="addData()">
        Sign Up
      </button>

      <p class="forgot-password text-right">
        Already registered
        <router-link :to="{name: 'Login'}">sign in?</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import { required, email, numeric, maxLength, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
  name: 'Signup',
  data () {
    return {
      user: {
        firstName: '',
        lastName: '',
        emailAddress: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
      },
      submitted: false
    }
  },
  validations: {
    user: {
      emailAddress: { required, email },
      phoneNumber: { required, numeric, maxLength: maxLength(10), minLength: minLength(10) },
      password: { required, minLength: minLength(6) },
      confirmPassword: { required, sameAsPassword: sameAs('password') }
    }

  },
  methods: {
    // handleSubmit (e) {
    //   this.submitted = true;
    //
    //   this.$v.$touch();
    //   if (this.$v.$invalid) {
    //     return
    //   }
    //   console.log(this.user.firstName)
    // },
    addData () {
      const data = {
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        emailAddress: this.user.emailAddress,
        phoneNumber: this.user.phoneNumber,
        password: this.user.password
      }
      axios.post('users', data)
        .then(response => {
          this.$store.state.user = response.data
          this.$router.push({ name: 'EditProfile' })
        })
    }
  }
}
</script>
