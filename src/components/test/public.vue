<template>
  <div class="full-width">
    <q-toolbar color="secondary">
      <q-icon name="vpn_key" />
      <q-toolbar-title>
        Public Page
      </q-toolbar-title>
    </q-toolbar>

    <h1>Public Page</h1>
    <p>This page should be accessible by all. Also if not authenticated.</p>
    <q-btn class="float-right" color="secondary" icon="cancel" v-go-back=" '/' ">Back</q-btn>

  </div>
</template>

<script>
  import { GoBack, QBtn, QToolbar, QIcon, QToolbarTitle, QField, QInput, Toast } from 'quasar'
  import { required, minLength, email } from 'vuelidate/lib/validators'
  import { mapMutations, mapActions } from 'vuex'

  export default {
    data () {
      return {
        credentials: {
          email: '',
          password: ''
        }
      }
    },

    mounted () {
      // on next Vue tick, to ensure
      // our Vue reference exists
      this.$nextTick(() => {
        // calling "next()" method:
        this.$refs.email.focus()
      })
    },

    validations: {
      credentials: {
        email: { required, email },
        password: { required, minLength: minLength(6) }
      }
    },

    methods: {
      submit () {
        this.$v.credentials.$touch()
        if (this.$v.credentials.$error) {
          Toast.create('Please review fields again.')
          console.log(this.$v.credentials.$error)
          return
        }
        this.authenticate({
          strategy: 'local',
          email: this.credentials.email,
          password: this.credentials.password
        })
          // Just use the returned error instead of mapping it from the store.
          .catch(error => {
            // Convert the error to a plain object and add a message.
            let type = error.className
            error = Object.assign({}, error)
            error.message = (type === 'not-authenticated')
              ? 'Incorrect email or password.'
              : 'An error prevented login: ' + error.message
            Toast.create(error.message)
          })
      },
      ...mapMutations('auth', {
        clearAuthenticateError: 'clearAuthenticateError'
      }),
      ...mapActions('auth', ['authenticate'])
    },

    components: { QBtn, QToolbar, QIcon, QToolbarTitle, QField, QInput },

    directives: { GoBack }
  }
</script>
