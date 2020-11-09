import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB7WJSyqpH5d89rezLunys46k7CULKnk3c",
    authDomain: "reenbit-test-app.firebaseapp.com",
    databaseURL: "https://reenbit-test-app.firebaseio.com",
    projectId: "reenbit-test-app",
    storageBucket: "reenbit-test-app.appspot.com",
    messagingSenderId: "494233687334",
    appId: "1:494233687334:web:4a8bfdc33283a825ebdde7",
    measurementId: "G-BY6NXF7H32"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db