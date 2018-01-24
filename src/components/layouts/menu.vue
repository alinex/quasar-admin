<template>
  <q-layout ref="layout" view="lHr LpR lFf" :right-breakpoint="1100">
    <q-toolbar slot="header">
      <q-btn flat @click="$refs.layout.toggleLeft()">
        <q-icon name="menu" />
      </q-btn>
      <q-toolbar-title>
        Administration Portal
        <div slot="subtitle">{{ title }}</div>
      </q-toolbar-title>

      <q-btn flat>
        <q-icon name="account circle" />
        <q-popover ref="popover" anchor="bottom left">
          <!--
            The DOM element(s) that make up the popup,
            in this case a list:
          -->
          <q-list separator link>
            <q-item class="item" v-go-back="'/'" @click="logout()">
              <q-item-side icon="exit_to_app" />
              <q-item-main label="Logout" />
            </q-item>
          </q-list>
        </q-popover>
      </q-btn>
      <q-btn flat>
        <q-icon name="build" />
      </q-btn>
    </q-toolbar>

    <!-- Left Side Panel -->
    <div slot="left">
      <q-list-header><b>Admin Modules</b></q-list-header>
      <q-list no-border link inset-separator>
        <q-collapsible label="Communication">
          <q-side-link item to="/chat">
            <q-item-side icon="chat" />
            <q-item-main label="Chat"/>
          </q-side-link>
        </q-collapsible>
        <q-collapsible label="Test Pages">
          <q-side-link item to="/test/public">
            <q-item-side icon="public" />
            <q-item-main label="Public"/>
          </q-side-link>
          <q-side-link item to="/profile">
            <q-item-side icon="security" />
            <q-item-main label="Secure" />
          </q-side-link>
        </q-collapsible>
      </q-list>
    </div>

    <q-toolbar color="light" slot="footer">
      &copy; Copyright Alexander Schilling 2018 powered by Quasar v{{ $q.version }}
    </q-toolbar>

    <router-view />

  </q-layout>
</template>

<style lang="stylus">
footer .q-toolbar
  color: #888
  min-height: 35px
</style>

<script>
  import { GoBack, QLayout, QToolbar, QBtn, QIcon, QToolbarTitle, QList, QCollapsible, QSideLink, QItemSide, QItemMain, QItem, QItemTile, QListHeader, QPopover } from 'quasar'

  export default{
    data () {
      return {
        title: ''
      }
    },

    watch: {
      '$route' () {
        this.title = this.$route.meta.title
      }
    },

    mounted () {
      this.title = this.$route.meta.title
    },

    methods: {
      logout () {
        // Auth.logout()
      }
    },

    components: { QLayout, QToolbar, QBtn, QIcon, QToolbarTitle, QList, QCollapsible, QSideLink, QItemSide, QItemMain, QItem, QItemTile, QListHeader, QPopover },

    directives: { GoBack }
  }
</script>
