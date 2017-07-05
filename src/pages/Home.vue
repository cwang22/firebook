<template>
  <div class="content">
    <h1 class="title">Notes</h1>
    <p v-if="authenticated">Hi, {{username}}!</p>
    <router-link v-if="authenticated" :to="`/notes`" class="button is-primary">View Notes</router-link>
    <a v-else="authenticated" class="button is-primary" @click="login">Login to continue</a>
  </div>
</template>
<script>
import firebaseService from '../services/firebase'
export default {
  name: 'home',
  computed: {
    authenticated () {
      return this.$store.state.user.authenticated
    },
    username () {
      return this.$store.state.user.name
    }
  },
  methods: {
    login () {
      firebaseService.login()
    }
  }
}
</script>
