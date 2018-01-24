<template>
  <div>
    <ul class="breadcrumb" color="secondary">
      <li>
        <a>
          <q-icon name="home" />
        </a>
      </li>
      <li>
        <a>
          <q-icon name="mail" /> Quasar
        </a>
      </li>
      <li>
        <a>
          <q-icon name="cloud" /> Breadcrumb
        </a>
      </li>
    </ul>


    <h1>Public Page</h1>
    <p>This page should be accessible by all. Also if not authenticated.</p>
    <q-btn class="float-right" color="secondary" icon="cancel" v-go-back=" '/' ">Back</q-btn>

    <q-modal ref="basicModal">
      <h4>Basic Modal</h4>
      <q-btn color="primary" @click="$refs.basicModal.close()">Close</q-btn>
    </q-modal>

  </div>
</template>

<style lang="stylus">
</style>

<script>
  import { GoBack, QBtn, QToolbar, QIcon, QToolbarTitle, QField, QInput, Toast, QModal } from 'quasar'
  import { required, minLength, email } from 'vuelidate/lib/validators'
  import { mapMutations, mapActions } from 'vuex'

  export default {
    data () {
    },

    components: { QBtn, QToolbar, QIcon, QToolbarTitle, QField, QInput, QModal },

    directives: { GoBack }
  }
</script>
