import React, { Fragment } from "react";
import '../style.css';
  import firebase from 'firebase/compat/app';
  import 'firebase/compat/firestore';
  import Header from "./Header";

const firebaseConfig = {
    // Your Firebase config here
    apiKey: "AIzaSyBm6S_Mbqjhefzpu4g-O8N_X1yvld1f_oI",
  authDomain: "realtime1-299f1.firebaseapp.com",
  databaseURL: "https://realtime1-299f1-default-rtdb.firebaseio.com",
  projectId: "realtime1-299f1",
  storageBucket: "realtime1-299f1.appspot.com",
  messagingSenderId: "375706491870",
  appId: "1:375706491870:web:a25785c309e9e9ab1a1b4f"
  };
  
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

function Req2() {

    function handleFormSubmit(event) {
      const timestamp = Date.now().toString(36);
      const randomStr = Math.random().toString(36).substring(2, 8); // Generate random string
  const uniqueId = timestamp + randomStr;
        event.preventDefault(); // Prevent the default form submission behavior
        addData2(uniqueId); // Call your addData2() function
      }
      

    function addData2(uniqueId) {
      var name = document.getElementById("name").value.toLowerCase();
      var email = document.getElementById("email").value;
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();
      const currentDate = new Date();

      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1;
      const day = currentDate.getDate();


const date = `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`;
        
        // var quantity = document.getElementById("quantity").value;
      
        // Set a new document with the custom ID in the "users" collection
        db.collection("users")
          .doc(uniqueId)
          .set({
            name: name,
            email: email,
            device: "NVIDIA Jetson Nano Developer Kit",
            // quantity: quantity,
            date:date,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            uniqueId:uniqueId,
          })
          .then(function() {
            console.log("Document written with ID: ", email);
            alert("Request sent successfully!");
          })
          .catch(function(error) {
            console.error("Error sending data: ", error);
            alert("Error sending data. Please try again!");
          });
      }

  return (
    <Fragment>
      <Header/>
      <div className="div">
      <form className="form" onSubmit={handleFormSubmit}>
<h2><span className="span" >Request for NVIDIA Jetson Nano Developer Kit</span> </h2>
 <input className="input1" placeholder="Enter your name" type="text" id="name" required />

 <input className="input1" placeholder="Enter your email" type="email" id="email" required />

{/* <input className="input2" type="number" name="quantity" id="quantity"  min="1" max="5" placeholder="How many Devices required" required/>  */}

 <button className="button" type="submit">Send Request</button>
</form></div>
    </Fragment>
  );
}

export default Req2;
