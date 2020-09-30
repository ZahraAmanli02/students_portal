import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'; // <- needed if using firestore
// import 'firebase/functions' // <- needed if using httpsCallable
import { createStore, combineReducers, compose } from 'redux'
import {
  ReactReduxFirebaseProvider,
  firebaseReducer
} from 'react-redux-firebase'
import { composeWithDevTools } from 'redux-devtools-extension';
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore' // <- needed if using firestore
 
const fbConfig = {
    apiKey: "AIzaSyCXKPGuDXm_oaG0FMKjjs_6gJXH2VhkSAw",
    authDomain: "studentbase-5fe64.firebaseapp.com",
    databaseURL: "https://studentbase-5fe64.firebaseio.com",
    projectId: "studentbase-5fe64",
    storageBucket: "studentbase-5fe64.appspot.com",
    messagingSenderId: "688570735549",
    appId: "1:688570735549:web:433036dca4bcf2078910d4",
    measurementId: "G-YTHKFXP5T6"
};
 
// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}
 
// Initialize firebase instance
firebase.initializeApp(fbConfig)
 
// Initialize other services on firebase instance
firebase.firestore() // <- needed if using firestore
// firebase.functions() // <- needed if using httpsCallable
 
// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer // <- needed if using firestore
})
 
// Create store with reducers and initial state
const initialState = {};
const store = createStore(rootReducer, initialState, composeWithDevTools());
 
export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
}

export default store