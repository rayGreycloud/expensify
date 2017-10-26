import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyC0mDXDdvz2-c9JO7LuWkkN1gc4h8vdNLY",
  authDomain: "eexpensify.firebaseapp.com",
  databaseURL: "https://eexpensify.firebaseio.com",
  projectId: "eexpensify",
  storageBucket: "eexpensify.appspot.com",
  messagingSenderId: "512242476619"
};

firebase.initializeApp(config);

firebase.database().ref().set({
  name: 'RayGreycloud'
});
