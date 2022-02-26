// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAET3YtSIvdtYKRzGcnyly_7P_JV9JTrQ",
  authDomain: "practica4-378d6.firebaseapp.com",
  databaseURL: "https://practica4-378d6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "practica4-378d6",
  storageBucket: "practica4-378d6.appspot.com",
  messagingSenderId: "967351776286",
  appId: "1:967351776286:web:895b99ada30aa6a135ea0f",
  measurementId: "G-2S3TF5TW0X"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//const analytics = getAnalytics(firebase);
// make auth and firestore references
const auth = firebase.auth();
console.log('Prueba auth',auth);
const db = firebase.firestore();

// listen for auth status changes
  auth.onAuthStateChanged(user => {
    if (user) {
      console.log('user logged in: ', user);
      setupUI(user);
    } else {
      console.log('user logged out');
      setupUI();
      document.querySelector('#logout');
    }
  })
  console.log('Prueba auth 2',auth);
  // signup
  const signupForm = document.querySelector('#signup-form');
  signupForm.addEventListener('submit', (e) => {
    console.log('prueba sign up')
    e.preventDefault();
    
    // get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    console.log(email,password);
    // sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
      signupForm.reset();
    });
  });
  
  // logout
  const logout = document.querySelector('#logout');
  logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
  });
  
  // login
  const loginForm = document.querySelector('#login-form');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;
  
    // log the user in
    auth.signInWithEmailAndPassword(email, password).then((cred) => {
      loginForm.reset();
    });
  
  });