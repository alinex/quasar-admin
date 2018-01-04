<template>
  <div class="full-width">
    <q-toolbar color="secondary">
      <q-icon name="edit" />
      <q-toolbar-title>
        Login
      </q-toolbar-title>
    </q-toolbar>

    <div class="layout-view layout-padding">
      <q-field icon="mail">
        <q-input v-model="credentials.email" placeholder="Your email address" @blur="$v.credentials.email.$touch" :error="$v.credentials.email.$error" class="full-width" />
      </q-field>
      <q-field icon="vpn_key">
        <q-input v-model="credentials.password" type="password" placeholder="Your password" @blur="$v.credentials.password.$touch" :error="$v.credentials.password.$error" class="full-width" />
      </q-field>

      <div class="submit row reverse">
        <q-btn color="primary" @click="submit()">Login</q-btn>
        <q-btn color="secondary" v-go-back=" '/' ">Cancel</q-btn>
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
          email: '',
          password: ''
        }
      }
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
        auth.login(this.credentials, 'profile')
      }
    },

    components: { QBtn, QToolbar, QIcon, QToolbarTitle, QField, QInput },

    directives: { GoBack }
  }
</script>
