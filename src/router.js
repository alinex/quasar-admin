import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  // '@' is aliased to src/components
  return () => import(`@/${component}.vue`)
}

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),

  routes: [
    { path: '/', component: load('welcome/welcome') }, // Default
    {
      path: '/',
      component: load('layouts/auth'),
      children: [
        { path: 'login', component: load('auth/login') },
        { path: 'register', component: load('auth/register') }
      ]
    },
    {
      path: '/',
      component: load('layouts/menu'),
      children: [
        { path: 'profile', component: load('profile/profile'), meta: { title: 'Profile' } }
        // { path: 'jokes', component: load('jokes/jokes'), meta: { title: 'Jokes' } }
      ]
    },
    { path: '*', component: load('error404') } // Not found
  ]
})
