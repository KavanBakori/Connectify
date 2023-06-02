import React, { Fragment } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "../style.css";
import Allreq from "./allreq";

const firebaseConfig = {
  apiKey: "AIzaSyBm6S_Mbqjhefzpu4g-O8N_X1yvld1f_oI",
  authDomain: "realtime1-299f1.firebaseapp.com",
  databaseURL: "https://realtime1-299f1-default-rtdb.firebaseio.com",
  projectId: "realtime1-299f1",
  storageBucket: "realtime1-299f1.appspot.com",
  messagingSenderId: "375706491870",
  appId: "1:375706491870:web:a25785c309e9e9ab1a1b4f"
  };
  
  firebase.initializeApp(firebaseConfig);
  const auth=firebase.auth();

function Login() {
  function validateForm() {
    var inputValue1 = document.getElementById("email").value;
    var inputValue2 = document.getElementById("password").value;

    if (inputValue1 === "" || inputValue2 === "") {
      alert("Please enter a value before submitting!");
      return false;
    } else {
      signin();
    }
  }

  function signin(){

    const email=document.getElementById("email").value;
      const password=document.getElementById("password").value;
  
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed in
      window.location.href = "allreq";
    })
    .catch((error) => {
      alert("Check your internet connection and type right password");  
      // var errorCode = error.code;
      // var errorMessage = error.message;
    });
  }

  function forgot() {
    const email = document.getElementById("email").value;
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        document.write(
          `Your password reset link successfully sent..Please check your email...${email}`
        );
      })
      .catch((error) => {
        alert("Something went wrong please try again...");
      });
  }

  return (
    <Fragment>
      <div className="containe">
        <label>Email:</label>
        <input type="email" placeholder="Enter Email" name="email" id="email" required />
        <label>Password:</label>
        <input type="password" placeholder="Enter Password" name="password" id="password" required />
        {/* <button type="button" className="submitbtn" onClick={validateForms}>Sign Up</button> */}
        <button type="button" className="submitbtn" onClick={validateForm}>Login</button>
        <a href="#" onClick={forgot} style={{ textDecoration: "none", color: "rgb(8, 8, 180)" }} >Forgot password?</a>
      </div>
    </Fragment>
  );
}

export default Login;
