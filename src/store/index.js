import Vue from 'vue'
import Vuex from 'vuex'
// import VuexI18n from 'vuex-i18n' // load vuex i18n module
import feathersVuex from 'feathers-vuex'
import feathersClient from '../feathers-client'

const { service, auth } = feathersVuex(feathersClient, { idField: '_id' })

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  plugins: [
    service('users'),
    service('messages'),
    auth({ userService: 'users' })
  ],
  //   getters,
  modules: {
    //     app,
    //     menu
  },
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

// Vue.use(VuexI18n.plugin, store)

export default store
