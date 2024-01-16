// import React from 'react';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';

// export const Config = () => {
//     const firebaseConfig = {
//         // Your Firebase config here
//         apiKey: "AIzaSyBm6S_Mbqjhefzpu4g-O8N_X1yvld1f_oI",
//       authDomain: "realtime1-299f1.firebaseapp.com",
//       databaseURL: "https://realtime1-299f1-default-rtdb.firebaseio.com",
//       projectId: "realtime1-299f1",
//       storageBucket: "realtime1-299f1.appspot.com",
//       messagingSenderId: "375706491870",
//       appId: "1:375706491870:web:a25785c309e9e9ab1a1b4f"
//       };
      
//       firebase.initializeApp(firebaseConfig);
//       const db = firebase.firestore();
// }

// export const fetchAndDisplayData1=()=> {
//     // Fetch data from Firestore with 'orderBy' clause for timestamp field
//     db.collection('users')
//       .orderBy('timestamp')
//       .get()
//       .then(function (querySnapshot) {
//         const fetchedData = [];
//         querySnapshot.forEach(function (doc) {
//           const data = doc.data();
//           fetchedData.push(data);
//         });
//         setData(fetchedData);
//       })
//       .catch(function (error) {
//         console.error('Error fetching data: ', error);
//         alert('Error fetching data. Please try again!');
//       });
//   }
