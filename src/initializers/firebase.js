import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDIrKyAGokXOydaHI5Id9TwZs8_MCvOS8o",
  authDomain: "rgapis.firebaseapp.com",
  databaseURL: "https://rgapis.firebaseio.com",
  projectId: "rgapis",
  storageBucket: "rgapis.appspot.com",
  messagingSenderId: "194816420788",
  appId: "1:194816420788:web:ade0a6428ea871a2d9e0e1"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
