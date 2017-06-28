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
        firebase.database().ref(`users/${user.uid}/notes`).on('value', (snapshot) => {
          window.app.$store.dispatch('fetch', snapshot.val())
        })
      } else {
        storeUser = {
          authenticated: false,
          uid: '',
          name: ''
        }
      }
      window.app.$store.dispatch('onAuthStateChanged', storeUser)
    })
  },
  login () {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
  },
  logout () {
    firebase.auth().signOut()
  },
  update (note) {
    let user = firebase.auth().currentUser
    let key = window.app.$route.params.key
    console.log(user)
    console.log(key)
    firebase.database().ref(`users/${user.uid}/notes/${key}`).set(note)
  }
}
