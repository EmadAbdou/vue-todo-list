import firebase from 'firebase/app'
import 'firebase/firestore'
//Paste in your firebase config we copied from the last step
var firebaseConfig = {
    apiKey: "AIzaSyBMu5de0qnNwTi80QrVUpw4TQIQVxIQZj4",
    authDomain: "vue-todo-73820.firebaseapp.com",
    databaseURL: "https://vue-todo-73820.firebaseio.com",
    projectId: "vue-todo-73820",
    storageBucket: "vue-todo-73820.appspot.com",
    messagingSenderId: "301757249225",
    appId: "1:301757249225:web:bc9fa5a4f21af50f383f18",
    measurementId: "G-FH4D5V6GE9"
};
// Get a Firestore instance
export const db = firebase
    .initializeApp(firebaseConfig)
    .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }