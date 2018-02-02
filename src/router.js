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
    // { path: '', component: load('welcome/welcome') },
    // { path: '/login', component: load('auth/login') },
    // { path: '/signup', component: load('auth/register') },
    // { path: '/chat', component: load('chat/chat') },
    // { path: '/test/public', component: load('test/public') },
    /*
    {
      path: '/',
      component: load('layouts/auth'),
      children: [
        { path: 'login', component: load('auth/login') },
        { path: 'register', component: load('auth/register') }
      ]
    }, */
    {
      path: '/',
      component: load('layouts/menu'),
      children: [
        { path: '/', component: load('welcome/welcome') }, // Default
        { path: 'info', component: load('info/info'), meta: { title: 'Info' } },
        { path: 'profile', component: load('profile/profile'), meta: { title: 'Profile' } },
        { path: 'test/public', component: load('test/public'), meta: { title: 'Public Test Page' } }
      ]
    },
    { path: '*', component: load('error404') } // Not found
  ]
})
