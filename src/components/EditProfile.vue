<template>
  <div class="vue-template user-form">
    <form>
      <h3>Edit User</h3>

      <div class="form-group">
        <label>First Name</label>
        <input type="text" v-model="user.firstName" class="form-control form-control-lg"/>
      </div>

      <div class="form-group">
        <label>Last Name</label>
        <input type="tel" v-model="user.lastName" class="form-control form-control-lg"/>
      </div>

      <div class="form-group">
        <label>Email address</label>
        <input type="email" v-model="user.emailAddress" class="form-control form-control-lg"/>
      </div>

      <div class="form-group">
        <label>Phone Number</label>
        <input type="tel" v-model="user.phoneNumber" class="form-control form-control-lg"/>
      </div>

      <div class="form-group">
        <label>Password</label>
        <input type="password" v-model="user.password" class="form-control form-control-lg"/>
      </div>

<p>{{$editData}}</p>

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
      console.log(id)
      axios.put('user/' + id, editData)
        .then(response => {
          this.$store.state.user = response.editData
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
