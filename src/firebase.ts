import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-storage';

var firebaseConfig = {
  apiKey: 'AIzaSyCRCilpmlxW7ujWjbU3CxFpZJSA5EJ9s3w',
  authDomain: 'distribution-site-6ece8.firebaseapp.com',
  databaseURL: 'https://distribution-site-6ece8.firebaseio.com',
  projectId: 'distribution-site-6ece8',
  storageBucket: 'distribution-site-6ece8.appspot.com',
  messagingSenderId: '831494305047',
  appId: '1:831494305047:web:279c1695285d3406f2f352',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
