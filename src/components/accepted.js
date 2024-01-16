import React, { useEffect, useState, useRef } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { differenceInDays, format, parse } from 'date-fns';
import 'datatables.net';
// import 'datatables.net-dt/css/jquery.dataTables.css';
import $ from 'jquery';
import Header from './Header';


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

function Accepted() {
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
    db.collection('accept')
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

    function handleAccept(email, device, name,acceptDate,uniqueId) {
        accept(email, device, name,acceptDate,uniqueId);
    }

    function remove(email, device, name,uniqueId) {
        db.collection("accept")
            .doc(uniqueId)
            .delete()
            .then(() => {
                alert("Device access is Stopped");
                Increment(email, device, name);

            })
            .catch((error) => {
                console.error("Error deleting document: ", error);
            });

    }

    function Increment(email, device, name) {
        db.collection('devices')
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    var data = doc.data();
                    var new1 = data.new1;
                    var new2 = data.new2;
                    var new3 = data.new3;

                    if (device === "NVIDIA Workstation") {
                        if (new1 < 15) {
                            db.collection("devices")
                                .doc("device")
                                .update({
                                    new1: new1 + 1,
                                })
                                .then(function () {
                                    console.log("Document written with ID: ", device);

                                })
                                .catch(function (error) {
                                    console.error("Error sending data: ", error);
                                    alert("Something went wrong. Please try leter!");
                                });
                        }
                    }

                    else if (device === "NVIDIA Jetson NanoDevloper Kit") {
                        if (new2 < 15) {
                            db.collection("devices")
                                .doc("device")
                                .update({
                                    new2: new2 + 1,
                                })
                                .then(function () {
                                    console.log("Document written with ID: ", device);


                                })
                                .catch(function (error) {
                                    console.error("Error sending data: ", error);
                                    alert("Something went wrong. Please try leter!");
                                });
                        }

                    }


                    else if (device === "NVIDIA DGX Station A100") {
                        if (new3 < 15) {
                            db.collection("devices")
                                .doc("device")
                                .update({
                                    new3: new3 + 1,
                                })
                                .then(function () {
                                    console.log("Document written with ID: ", device);

                                })
                                .catch(function (error) {
                                    console.error("Error sending data: ", error);
                                    alert("Something went wrong. Please try leter!");
                                });
                        }

                    }

                    else {
                        alert("Something went wrong please try leter")
                    }
                });
            })
            .catch(function (error) {
                console.error("Error fetching data: ", error);
                alert("Something went wrong. Please try leter!");
            });

    }

    function accept(email, device, name,acceptDate,uniqueId) {
        const todayDate = new Date();
        const TodayDate = `${todayDate.getDate().toString().padStart(2, '0')}-${(todayDate.getMonth() + 1).toString().padStart(2, '0')}-${todayDate.getFullYear()}`;
        db.collection("history")
            .doc(uniqueId)
            .set({
                name: name,
                email: email,
                device: device,
                // quantity:quantity,
                lastDate: TodayDate,
                acceptDate: acceptDate,
                uniqueId:uniqueId,
                // timestamp: firebase.firestore.FieldValue.serverTimestamp(),

            })
            .then(function () {
                console.log("Document written with ID: ");
                remove(email, device, name,uniqueId);
            })
            .catch(function (error) {
                console.error("Error sending data: ", error);
                alert("Error sending data. Please try again!");
            });
    }

    function color(days){

        if(days<=7 && days>5){
            return `#f0e68c`;
        }
        else if(days<=5){
            return `#f08080`
        }

    }


    return (
        <div>
          <Header/>
          <h1 style={{ textAlign: 'center', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" ,marginTop:'50px'}}>
            Current Users
          </h1>
          <table ref={tableRef} style={{ margin: 'auto', width: '1500px' }}>
            <thead>
              <tr>
                <th>Last Date</th>
                <th>Remaining Days</th>
                <th>Name</th>
                <th style={{ width: '100px' }}>Email</th>
                <th style={{ padding: '20px' }}>Device</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} style={{ backgroundColor: color(differenceInDays(parse(item.lastDate, 'dd-MM-yyyy', new Date()), new Date())) }}>
                  <td>{item.lastDate}</td>
                  <td>{differenceInDays(parse(item.lastDate, 'dd-MM-yyyy', new Date()), new Date())}</td>
                  <td>{item.name}</td>
                  <td>
                    <a href={`mailto:${item.email}`}>{item.email}</a>
                  </td>
                  <td>{item.device}</td>
                  <td>
                    <button
                      className="inbutton2"
                      onClick={() => handleAccept(item.email, item.device, item.name, item.acceptDate, item.uniqueId)}
                    >
                      Stop Access
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    
    export default Accepted;





