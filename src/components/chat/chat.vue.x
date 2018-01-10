<template>
  <div>
    <div class="row">
      <div class="layout-padding col-8" >
        <q-chat-message v-for="message in messages"
          :text="[message.text]"
          :avatar="message.user.avatar"
          :stamp="messageDate(message)"
          :sent="isSent(message) ? true : false"
        />
      </div>
      <q-list highlight class="col-auto">
        <q-list-header>People</q-list-header>
        <q-item v-for="user in users">
          <q-item-side :avatar="user.avatar" />
          <q-item-main>
            <q-item-tile label>{{user.email}}</q-item-tile>
          </q-item-main>
          <q-item-side right>
            <q-item-tile icon="chat_bubble" color="green" />
          </q-item-side>
        </q-item>
      </q-list>
    </div>
    <q-input class="row col-12 fixed-bottom"
      v-model="message"
      v-on:keyup.enter="send"
      type="textarea"
      float-label="Enter your message"
      :min-rows="1"
    />
  </div>
</template>

<script>
  import { Toast, QList, QItem, QItemMain, QItemTile } from 'quasar'
  import axios from 'axios'
  import menu from '../layouts/menu'

  export default{
    data () {
      return {
        jokes: []
      }
    },

    mounted () {
      this.fetchJokes()
    },

    methods: {
      fetchJokes () {
        axios.get('jokes')
          .then((response) => {
            this.jokes = response.data
          }, () => {
            Toast.create.negative('Something went wrong!')
          })
      }
    },

    components: { 'q-menu': menu, QList, QItem, QItemMain, QItemTile }
  }
</script>
