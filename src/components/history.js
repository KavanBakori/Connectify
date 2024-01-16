import React, { useEffect, useState, useRef } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import $ from 'jquery';
import 'datatables.net';
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

function History() {
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
    // Fetch data from Firestore with 'orderBy' clause for name field
    db.collection('history')
      .orderBy('name', 'asc')
      .get()
      .then(function(querySnapshot) {
        const fetchedData = [];
        querySnapshot.forEach(function(doc) {
          const data = doc.data();
          fetchedData.push(data);
        });
        setData(fetchedData);
      })
      .catch(function(error) {
        console.error('Error fetching data: ', error);
        alert('Error fetching data. Please try again!');
      });
  }

  return (
    <div>
      <Header/>
      <h1 style={{ textAlign: 'center', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",marginTop:'50px' }}>History</h1>
      <table ref={tableRef} style={{ margin: 'auto' }}>
        <thead>
          <tr>
            <th>Starting Date</th>
            <th>Last Date</th>
            <th style={{ width: 'auto' }}>Name</th>
            <th style={{ width: 'auto' }}>Email</th>
            <th style={{ padding: '20px' }}>Device</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.acceptDate}</td>
              <td>{item.lastDate}</td>
              <td>{item.name}</td>
              <td>
                <a href={`mailto:${item.email}`}>{item.email}</a>
              </td>
              <td>{item.device}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default History;





