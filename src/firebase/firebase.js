import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyC0mDXDdvz2-c9JO7LuWkkN1gc4h8vdNLY",
  authDomain: "eexpensify.firebaseapp.com",
  databaseURL: "https://eexpensify.firebaseio.com",
  projectId: "eexpensify",
  storageBucket: "eexpensify.appspot.com",
  messagingSenderId: "512242476619"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };
