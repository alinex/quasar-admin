<template>
  <div>
    <q-toolbar color="secondary">
      <q-btn flat v-go-back=" '/' ">
        <q-icon name="arrow_back" />
      </q-btn>
      <q-toolbar-title>
        Alinex Admin Panel
        <div slot="subtitle">operation tasks easy and fast</div>
      </q-toolbar-title>
    </q-toolbar>

    <div class="input-page window-width bg-light column items-center no-wrap">
      <div class="input-card shadow-4 bg-white column items-center justify-center no-wrap">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="stylus">
  .input-card
    border-radius 5px
    margin-top -50px
    width 80vw
    max-width 600px
    margin 10vh
    .layout-padding
      margin 0 32px

  .submit
    >.q-btn
      margin 5px
</style>

<script>
  import { GoBack, QToolbar, QBtn, QIcon, QToolbarTitle } from 'quasar'

  export default{
    data () {
      return {
        title: ''
      }
    },

    components: { QToolbar, QBtn, QIcon, QToolbarTitle },

    directives: { GoBack }
  }
</script>
