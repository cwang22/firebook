<template>
  <nav class="nav">
    <div class="nav-left">
      <a class="nav-item">VueNotes</a>
      <router-link :to="item.id" class="nav-item" v-for="item in list" :key="item.id" v-if=" item.auth || authenticated()">{{item.title}}</router-link>
    </div>

  <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
  <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
  <span class="nav-toggle">
    <span></span>
    <span></span>
    <span></span>
  </span>

  <!-- This "nav-menu" is hidden on mobile -->
  <!-- Add the modifier "is-active" to display it on mobile -->
  <div class="nav-right nav-menu">
    <a class="nav-item" v-if="authenticated()">{{ user.displayName }}</a>
    <a class="nav-item" v-if="authenticated()" @click="logout">Logout</a>
    <a class="nav-item" v-else="authenticated()" @click="login">Login</a>
  </div>
</nav>
</template>
<script>
  import firebase from 'firebase'
  export default {
    data () {
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
        user: window.user
      }
    },

    methods: {
      authenticated () {
        return window.authenticated !== null && window.authenticated
      },
      login () {
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider).then((result) => {
          this.user = result.user
          let usersRef = firebase.database().ref(`users/${this.user.uid}`)
          usersRef.once('value', (snapshot) => {
            if (snapshot.hasChild('notes')) return
            usersRef.child('notes').push({
              title: 'Hello World!',
              content: 'Your first note'
            })
          })
          this.$forceUpdate()
        })
      },
      logout () {
        firebase.auth().signOut().then(() => {
          window.authenticated = false
          window.user = null
          this.user = null
          this.$forceUpdate()
        })
      }
    }
  }
</script>
<style scoped>
  .nav {
    box-shadow: 1px 0 1px rgba(0, 0, 0, 0.5)
  }
</style>
