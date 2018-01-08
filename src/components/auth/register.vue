<template>
  <div class="full-width">
    <q-toolbar color="secondary">
      <q-icon name="edit" />
      <q-toolbar-title>
        Register
      </q-toolbar-title>
    </q-toolbar>

    <div class="layout-view layout-padding">
      <q-field icon="face">
        <q-input v-model="credentials.name" placeholder="Your name" @blur="$v.credentials.name.$touch" :error="$v.credentials.name.$error" class="full-width" ref="email" />
      </q-field>
      <q-field icon="mail" error-label="A valid email address is needed">
        <q-input v-model="credentials.email" placeholder="Your email address" @blur="$v.credentials.email.$touch" :error="$v.credentials.email.$error" class="full-width" />
      </q-field>
      <q-field icon="vpn_key" error-label="Use at least 6 characters">
        <q-input v-model="credentials.password" type="password" placeholder="Your password" @blur="$v.credentials.password.$touch" :error="$v.credentials.password.$error" @keyup.enter="submit"
        class="full-width" />
      </q-field>

      <div class="submit row reverse">
        <q-btn color="primary" icon="edit" @click="submit()">Register</q-btn>
        <q-btn color="secondary" icon="cancel" v-go-back=" '/' ">Cancel</q-btn>
      </div>
    </div>
  </div>
</template>

<script>
  import { GoBack, QBtn, QToolbar, QIcon, QToolbarTitle, QField, QInput, Toast } from 'quasar'
  import { required, minLength, email } from 'vuelidate/lib/validators'
  import auth from '../../auth'

  export default {
    data () {
      return {
        credentials: {
          name: '',
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
        name: { required },
        email: { required, email },
        password: { required, minLength: minLength(6) }
      }
    },

    methods: {
      submit () {
        this.$v.credentials.$touch()
        if (this.$v.credentials.$error) {
          Toast.create('Please review fields again.')
          return
        }
        auth.signup(this.credentials, 'profile')
      }
    },

    components: { QBtn, QToolbar, QIcon, QToolbarTitle, QField, QInput },

    directives: { GoBack }
  }
</script>
