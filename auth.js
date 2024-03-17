const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCQst1UT8I6U8Fmi7YRc2O4TVCG31AuEUM",
  authDomain: "auth-form-3645e.firebaseapp.com",
  projectId: "auth-form-3645e",
  storageBucket: "auth-form-3645e.appspot.com",
  messagingSenderId: "349502996717",
  appId: "1:349502996717:web:015243df7a690fe3f78ce4",
  measurementId: "G-GZ2LHLXQKZ"
 });
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();


// sing up function
 const signUp=()=>{
    const email = document.getElementById("email").value;
    // FIREBASE CODE
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
 }