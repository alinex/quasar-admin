<template>
  <p>Coming soon.... {{ server }}</p>
</template>

<style lang="stylus">
</style>

<script>
export default {
  name: 'Info',

  data () {
    return {
      server: 'TEST' // this.$services.info.find()
    }
  }

}
</script>
