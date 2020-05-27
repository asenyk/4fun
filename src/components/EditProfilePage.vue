<template>
  <div class="vue-template user-form">
    <form>
      <h3>Edit User Profile</h3>

      <div class="form-group">
        <label>First Name</label>
        <input type="text" v-model="profile.firstName" class="form-control form-control-lg"/>
      </div>

      <div class="form-group">
        <label>Last Name</label>
        <input type="text" v-model="profile.lastName" class="form-control form-control-lg"/>
      </div>

      <div class="form-group">
        <label>Email address</label>
        <input type="email" v-model="profile.email" class="form-control form-control-lg"/>
      </div>

      <div class="form-group">
        <label>Phone Number</label>
        <input type="email" v-model="profile.phone" class="form-control form-control-lg"/>
      </div>

      <div class="form-group">
        <label>Password</label>
        <input type="password" v-model="profile.password" class="form-control form-control-lg"/>
      </div>

      <button type="button" class="btn btn-dark btn-lg btn-block" v-on:click="save">Edit</button>

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
    save: function () {
      console.log(this.profile)
    }
  }
}
</script>
