import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAOX0_mYHQiVVujUL3DO7J9lHm0swui-B8",
    authDomain: "crud-19396.firebaseapp.com",
    projectId: "crud-19396",
    storageBucket: "crud-19396.appspot.com",
    messagingSenderId: "1068075142786",
    appId: "1:1068075142786:web:9c2a2bed785fd9cf096e9b"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)