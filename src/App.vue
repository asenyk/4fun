<template>
  <div class="vue-template">
    <!-- Navigation -->
    <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
        <router-link class="navbar-brand float-left" to="/">
          4Fun
        </router-link>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link v-if="isLoggedIn" class="nav-link pr-3" to="/login">Sign out</router-link>
            <router-link v-else class="nav-link pr-3" to="/login">Sign in</router-link>
          </li>
          <li class="nav-item">
            <router-link v-if="isLoggedIn" class="btn btn-outline-primary" to="/edit-profile">Edit profile</router-link>
            <router-link v-else class="btn btn-outline-primary" to="/signup">Sign up</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Main -->
    <div class="App">
      <div class="vertical-center">
        <div class="inner-block">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn
    }
  },
  methods: {
    logout: function () {
      this.$store.dispatch('logout').then(() => {
        this.$router.push('/login')
      })
    }
  }
}
</script>
