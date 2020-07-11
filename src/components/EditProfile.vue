<template>
  <div class="vue-template user-form">
    <form>
      <h3>Edit User</h3>

      <div class="form-group">
        <label>First Name</label>
        <input type="text"
               class="form-control form-control-lg" :class="{ 'is-invalid': submitted && $v.user.firstName.$error }"
               v-model="user.firstName"
               @blur="$v.user.firstName.$touch()"
        />
      </div>
      <div v-if="$v.user.firstName.$error" class="error"> First Name is required</div>

      <div class="form-group">
        <label>Last Name</label>
        <input type="text"
               class="form-control form-control-lg" :class="{ 'is-invalid': submitted && $v.user.lastName.$error }"
               v-model="user.lastName"
               @blur="$v.user.lastName.$touch()"
        />
      </div>
      <div v-if="$v.user.lastName.$error" class="error"> Last Name is required</div>

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
        <span v-if="!$v.user.emailAddress.required && $v.$touch()">Email is required</span>
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
        <span
          v-if="!$v.user.phoneNumber.maxLength || !$v.user.phoneNumber.minLength"> Number must have 10 numbers  </span>
        <span v-else>phone is invalid</span>
      </div>

      <div class="form-group">
        <label>Password</label>
        <input type="password"
               class="form-control form-control-lg" :class="{ 'is-invalid': submitted && $v.user.password.$error }"
               v-model="user.password"/>
      </div>
      <div v-if="$v.user.password.$error" class="error">
        <span v-if="!$v.user.password.required || $v.$touch()">Password is required</span>
        <span v-if="!$v.user.password.minLength">Password must be at least 6 characters</span>
      </div>

      <div class="form-group">
        <label>Confirm Password</label>
        <input type="password"
               class="form-control form-control-lg"
               :class="{ 'is-invalid': submitted && $v.user.confirmPassword.$error }"
               v-model="user.confirmPassword"/>
      </div>
      <div v-if="$v.user.confirmPassword.$error" class="error">
        <span v-if="!$v.user.confirmPassword.required">Confirm Password is required</span>
        <span v-else-if="!$v.user.confirmPassword.sameAsPassword">Passwords must match</span>
      </div>

      <button
        type="button"
        class="btn btn-dark btn-lg btn-block"
        v-on:click=" editUser ">
        Edit
      </button>

    </form>
  </div>
</template>

<script>

import axios from 'axios'
import { email, required, numeric, maxLength, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
  name: 'EditProfile',
  data () {
    return {
      user: {
        firstName: '',
        lastName: '',
        emailAddress: '',
        phoneNumber: '',
        password: ''
      }
    }
  },
  validations: {
    user: {
      firstName: { required },
      lastName: { required },
      emailAddress: { required, email },
      phoneNumber: { required, numeric, maxLength: maxLength(10), minLength: minLength(10) },
      password: { required, minLength: minLength(6) },
      confirmPassword: { required, sameAsPassword: sameAs('password') }

    }
  },
  methods: {
    editUser () {
      const editData = {
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        emailAddress: this.user.emailAddress,
        phoneNumber: this.user.phoneNumber,
        password: this.user.password
      }
      const id = this.user.id
      axios.put('users/' + id, editData)
        .then(response => {
          this.$store.state.user = response.data
        })
    },
    save: function () {
      console.log(this.user)
    }

  },

  mounted () {
    this.user = this.$store.state.user
  }
}
</script>
