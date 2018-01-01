<template>
  <!-- if you want automatic padding use "layout-padding" class -->
  <div class="layout-padding">
    <p>Test the following urls:</p>
    <ul>
      <li><router-link to="/hello">/hello</router-link> - example page</li>
      <li><router-link to="/xxxx">/xxxx</router-link> - not found</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style>
</style>
