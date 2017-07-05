import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyAqrTWUzBIyENlG4323jm4ZI1TLjm0AWo4',
  authDomain: 'notebook-69274.firebaseapp.com',
  databaseURL: 'https://notebook-69274.firebaseio.com',
  projectId: 'notebook-69274',
  storageBucket: 'notebook-69274.appspot.com',
  messagingSenderId: '964397278361'
}

firebase.initializeApp(config)

export default {
  init () {
    firebase.auth().onAuthStateChanged(user => {
      let storeUser
      if (user) {
        storeUser = {
          authenticated: true,
          uid: user.uid,
          name: user.displayName
        }
        firebase.database().ref(`notes/${user.uid}`).on('value', (snapshot) => {
          window.app.$store.dispatch('fetch', snapshot.val())
        })
      } else {
        storeUser = {
          authenticated: false,
          uid: '',
          name: ''
        }
        window.app.$router.push('/')
      }
      window.app.$store.dispatch('onAuthStateChanged', storeUser)
    })
  },
  auth () {
    return firebase.auth().currentUser !== null
  },
  login () {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
  },
  logout () {
    firebase.auth().signOut()
  },
  create (note) {
    const user = firebase.auth().currentUser
    firebase.database().ref(`notes/${user.uid}`).push(note)
  },
  update (note) {
    const user = firebase.auth().currentUser
    const key = window.app.$route.params.key
    firebase.database().ref(`notes/${user.uid}/${key}`).set(note)
  },
  destroy (key) {
    const user = firebase.auth().currentUser
    firebase.database().ref(`notes/${user.uid}/${key}`).remove()
  }
}
