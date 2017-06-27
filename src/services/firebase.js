import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyAqrTWUzBIyENlG4323jm4ZI1TLjm0AWo4',
  authDomain: 'notebook-69274.firebaseapp.com',
  databaseURL: 'https://notebook-69274.firebaseio.com',
  projectId: 'notebook-69274',
  storageBucket: 'notebook-69274.appspot.com',
  messagingSenderId: '964397278361'
}

export default function initFirebase (callback) {
  firebase.initializeApp(config)
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      callback(true, user)
    } else {
      callback(false)
    }
  }, error => console.log(error))
}

