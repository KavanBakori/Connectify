import React, { useEffect, useState, useRef } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'datatables.net';
// import 'datatables.net-dt/css/jquery.dataTables.css';
import $ from 'jquery';

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

function Table() {
  const [data, setData] = useState([]);
  const tableRef = useRef(null);

  useEffect(() => {
    fetchAndDisplayData1();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      $(tableRef.current).DataTable();
    }
  }, [data]);

  function fetchAndDisplayData1() {
    // Fetch data from Firestore with 'orderBy' clause for timestamp field
    db.collection('users')
      .orderBy('timestamp')
      .get()
      .then(function (querySnapshot) {
        const fetchedData = [];
        querySnapshot.forEach(function (doc) {
          const data = doc.data();
          fetchedData.push(data);
        });
        setData(fetchedData);
      })
      .catch(function (error) {
        console.error('Error fetching data: ', error);
        alert('Error fetching data. Please try again!');
      });
  }

  function handleAccept(email, device,name,uniqueId) {
    de(email, device,name,uniqueId);
  }

  function de(email, device,name,uniqueId) {
    db.collection('devices')
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          var data = doc.data();
          var new1 = data.new1;
          var new2 = data.new2;
          var new3 = data.new3;

          if (device === 'NVIDIA Workstation') {
            if (new1 > 0) {
              db.collection('devices')
                .doc('device')
                .update({
                  new1: new1 - 1,
                })
                .then(function () {
                  console.log('Document written with ID: ', device);
                  alert('Accepted');
                  displayFinalDate(email, device,name,uniqueId);
                })
                .catch(function (error) {
                  console.error('Error sending data: ', error);
                  alert('Error sending data. Please try again!');
                });
            } else {
              alert('Currently '+device + ' is not available');
            }
          } else if (device === 'NVIDIA Jetson NanoDevloper Kit') {
            if (new2 > 0) {
              db.collection('devices')
                .doc('device')
                .update({
                  new2: new2 - 1,
                })
                .then(function () {
                  console.log('Document written with ID: ', device);
                  alert('Accepted');
                  displayFinalDate(email, device,name,uniqueId);
                })
                .catch(function (error) {
                  console.error('Error sending data: ', device);
                  alert('Error sending data. Please try again!');
                });
            } else {
              alert('Currently '+device + ' is not available');
            }
          } else if (device === 'NVIDIA DGX Station A100') {
            if (new3 > 0) {
              db.collection('devices')
                .doc('device')
                .update({
                  new3: new3 - 1,
                })
                .then(function () {
                  console.log('Document written with ID: ', device);
                  alert('Accepted');
                  displayFinalDate(email, device,name,uniqueId);
                })
                .catch(function (error) {
                  console.error('Error sending data: ', error);
                  alert('Error sending data. Please try again!');
                });
            } else {
              alert('Currently '+device + ' is not available');
            }
          } else {
            alert('Something went wrong. Please try again');
          }
        });
      })
      .catch(function (error) {
        console.error('Error fetching data: ', error);
        alert('Error fetching data. Please try again!');
      });
  }

  function displayFinalDate(email, device,name,uniqueId) {
    const currentDate = new Date();
    const finalDate = new Date(currentDate.setDate(currentDate.getDate() + 15));

    const year = finalDate.getFullYear();
    const month = finalDate.getMonth() + 1;
    const day = finalDate.getDate();

    const lastDate = `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`;

    const todayDate = new Date();
    const acceptDate = `${todayDate.getDate().toString().padStart(2, '0')}-${(todayDate.getMonth() + 1).toString().padStart(2, '0')}-${todayDate.getFullYear()}`;
    accept(email, device, lastDate, acceptDate,name,uniqueId);
  }

  function accept(email, device, lastDate, acceptDate,name,uniqueId) {
    db.collection('accept')
      .doc(uniqueId)
      .set({
        name: name,
        email: email,
        device: device,
        lastDate: lastDate,
        acceptDate: acceptDate,
        uniqueId:uniqueId,
      })
      .then(function () {
        console.log('Document written with ID: ');
        alert('Added in your list of accepted users');
      })
      .catch(function (error) {
        console.error('Error sending data: ', error);
        alert('Error sending data. Please try again!');
      });
    remove(uniqueId);
  }

  function remove(uniqueId) {
    db.collection('users')
      .doc(uniqueId)
      .delete()
      .then(() => {})
      .catch((error) => {
        console.error('Error deleting document: ', error);
      });
  }

  function signout(){
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      alert("Signout successfully")
      window.location.href = "/";
    }).catch((error) => {
      // An error happened.
      console.log("Error signing out:", error);
    });
  }


  return (
    <div>
      <button id="third" className="both" onClick={signout}>
        Signout
      </button>
      <h1 style={{ textAlign: 'center', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
        All requests
      </h1>

      <table ref={tableRef} id="requestTable">
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Device</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>
                <a href={`mailto:${item.email}`}>{item.email}</a>
              </td>
              <td>{item.device}</td>
              <td>
                <button className="inbutton" onClick={() => handleAccept(item.email, item.device, item.name, item.uniqueId)}>
                  Accept
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="btn">
        <button id="first" className="both">
          <a href="accepted">Current Users</a>
        </button>
        <button id="second" className="both">
          <a href="history">History</a>
        </button>
      </div>
    </div>
  );
}

export default Table;





