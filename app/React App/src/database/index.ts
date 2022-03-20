import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import firebaseConfig from './config'

const  firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp; 