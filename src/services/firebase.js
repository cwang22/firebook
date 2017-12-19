import firebase from 'firebase'
import app from '../main'
const config = {
  apiKey: 'AIzaSyAqrTWUzBIyENlG4323jm4ZI1TLjm0AWo4',
  authDomain: 'notebook-69274.firebaseapp.com',
  databaseURL: 'https://notebook-69274.firebaseio.com',
  projectId: 'notebook-69274',
  storageBucket: 'notebook-69274.appspot.com',
  messagingSenderId: '964397278361'
}

export default {
  init () {
    firebase.initializeApp(config)
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        firebase.database().ref(`notes/${user.uid}`).on('value', (snapshot) => {
          app.$store.dispatch('SET_NOTES', snapshot.val())
        })
      }
      app.$store.dispatch('AUTH_STATE_CHANGED', user)
    })
  },
  login () {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
  },
  logout () {
    app.$router.push('/')
    firebase.auth().signOut()
  },
  create (note) {
    const user = firebase.auth().currentUser
    firebase.database().ref(`notes/${user.uid}`).push(note)
  },
  update (note) {
    const user = firebase.auth().currentUser
    const key = app.$route.params.key
    firebase.database().ref(`notes/${user.uid}/${key}`).set(note)
  },
  destroy (key) {
    const user = firebase.auth().currentUser
    firebase.database().ref(`notes/${user.uid}/${key}`).remove()
  }
}
