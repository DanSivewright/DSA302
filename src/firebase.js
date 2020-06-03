import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase'

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyAb_0rBcfFis1UnM59Teq4tEruRJhuTgsc',
  authDomain: 'dsa302-4b9ae.firebaseapp.com',
  databaseURL: 'https://dsa302-4b9ae.firebaseio.com',
  projectId: 'dsa302-4b9ae',
  storageBucket: 'dsa302-4b9ae.appspot.com',
  messagingSenderId: '687855707909',
  appId: '1:687855707909:web:93e01bb468335ebe8eb96c'
})

export { firebaseConfig as firebaseApp }
