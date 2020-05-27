<template>
  <div class="vue-template user-form">
    <form>
      <h3>Edit User Profile</h3>

      <div class="form-group">
        <label>First Name</label>
        <input type="text" @input="firstname($event.target.value)" class="form-control form-control-lg"/>
      </div>

      <div class="form-group">
        <label>Last Name</label>
        <input type="text" @input="lastname($event.target.value)" class="form-control form-control-lg"/>
      </div>

      <div class="form-group">
        <label>Email address</label>
        <input type="email" @input="emailadress($event.target.value)" class="form-control form-control-lg"/>
      </div>

      <div class="form-group">
        <label>Phone Number</label>
        <input type="email" @input="phonenumber($event.target.value)" class="form-control form-control-lg"/>
      </div>

      <div class="form-group">
        <label>Password</label>
        <input type="password" @input="pass($event.target.value)" class="form-control form-control-lg"/>
      </div>

      <button type="button" class="btn btn-dark btn-lg btn-block" v-on:click="logo">Edit</button>

    </form>
  </div>
</template>

<script>
export default {
  name: 'EditProfilePage',
  data: function () {
    return {
      profile: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: ''
      }
    }
  },

  methods: {
    firstname (value) {
      this.profile.firstName = value
    },
    lastname (value) {
      this.profile.lastName = value
    },
    emailadress (value) {
      this.profile.email = value
    },
    phonenumber (value) {
      this.profile.phone = value
    },
    pass (value) {
      this.profile.password = value
    },
    logo: function () {
      console.log(this.profile)
    }
  }

}
</script>

<style scoped>

</style>
