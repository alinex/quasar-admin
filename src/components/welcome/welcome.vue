<template>
  <div class="layout-view layout-padding">
    <div class="branding">
      <div class="splash"></div>
      <div class="tagline">Administration Panel</div>
    </div>
    <div class="row no-gutter">
      <q-btn color="primary" class="full-width" @click="goTo('login')">
        Login
      </q-btn>
    </div>
    <br>
    <div class="row no-gutter">
      <q-btn color="secondary" class="full-width" @click="goTo('register')">
        Register
      </q-btn>
    </div>
    <div class="hint">
      <p>Restricted access for staff only!</p>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  @import '~variables'

  @media only screen and (min-width: 601px)
    .layout-padding
      margin 0 auto
      width 80%
      max-width 600px

  .splash
    background url(../../statics/alinex-logo.png) no-repeat center center
    margin 0 auto
    height 100px
    width 300px

  .branding
    margin 0 auto
    text-align center
    max-width 350px
    padding-bottom 80px

  .branding .tagline
    color $primary
    font-size 30px
    font-weight bold
    line-height 30px

  .hint
    padding 30px
</style>

<script>
  import { QBtn } from 'quasar'
  import { mapState } from 'vuex'
  import router from '../../router'
  import { INCREMENT } from '../../store/mutation-types'

  export default {
    computed: mapState(['count']),
    methods: {
      goTo (link) {
        this.$store.commit(INCREMENT)
        console.log(this.count) // -> 1

        router.push(link)
      }
    },

    components: { QBtn }
  }
</script>
