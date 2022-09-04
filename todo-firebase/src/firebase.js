import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBAMMS34mq2ueJvlA83SklaV7Fr8hc2kk0",
  authDomain: "ajaya-todo-app.firebaseapp.com",
  projectId: "ajaya-todo-app",
  storageBucket: "ajaya-todo-app.appspot.com",
  messagingSenderId: "183970219566",
  appId: "1:183970219566:web:2d408b0412801f7b6641bf",
  measurementId: "G-7QJ6F71J0P"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;