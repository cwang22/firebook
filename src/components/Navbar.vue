<template>
  <nav class="navbar has-shadow">
    <div class="navbar-brand">
      <a class="navbar-item">VueNotes</a>
      <button class="button navbar-burger">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link :to="item.id" class="navbar-item" v-for="item in list" :key="item.id" v-if=" item.auth || authenticated">{{item.title}}</router-link>
      </div>

      <div class="navbar-end" v-bind:class="{ 'is-active': isActive }">
        <a class="navbar-item" v-if="authenticated">{{ username }}</a>
        <a class="navbar-item" v-if="authenticated" @click="logout">Logout</a>
        <a class="navbar-item" v-else @click="login">Login</a>
      </div>
    </div>

  </nav>
</template>
<script>
import firebaseService from '../services/firebase'

export default {
  data() {
    return {
      list: [
        {
          title: 'Home',
          id: '/',
          auth: true
        },
        {
          title: 'Notes',
          id: '/notes',
          auth: false
        }
      ],
      isActive: false
    }
  },
  computed: {
    authenticated() {
      return this.$store.getters.authenticated
    },
    username() {
      return this.$store.state.user.name
    }
  },
  methods: {
    login() {
      firebaseService.login()
    },
    logout() {
      firebaseService.logout()
    }
  }
}
</script>
