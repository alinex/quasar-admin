<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
/*
 * Root component
 */

export default {
  name: 'app',
  computed: {
    // The user is automatically set by the feathers-vuex auth module upon login.
    user () {
      return this.$store.state.auth.user
    }
  },
  watch: {
    // When the user is set, redirect to the Chat page.
    user (newVal) {
      if (newVal === undefined) {
        this.$router.replace('/login')
      }
      else {
        this.$router.replace('/')
      }
    },
    mounted () {
      this.$store.dispatch('auth/authenticate')
        .then(user => {
          console.error(user)
        })
        .catch(error => {
          if (!error.message.includes('Could not find stored JWT')) {
            console.error(error)
          }
        })
    }
  }
}
</script>

<style></style>
