import * as firebase from 'firebase';
import { config } from '../firebase/firebase';

// Initialize Firebase

firebase.initializeApp(config);

const database = firebase.database();

database.ref('expenses')
  .on('value', snapshot => {
    const expenses = [];
    
    snapshot.forEach((childSnapshot) => {
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });
    
    console.log(expenses);
  }, (e) => {
    console.log('Error fetching data: ', e);
  });
  
// database.ref('expenses')
//   .once('value')
//   .then(snapshot => {
//     const expenses = [];
//     
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     
//     console.log(expenses);
//   });

// expenses.map(expense => database.ref('expenses').push(expense));
// 
// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
//   }, (e) => {
//     console.log('Error fetching data', e);
//   });

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log('Data fetched: ', val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data: ', e);
//   });

// database.ref().set({
//   name: "Anakin Skywalker",
//   age: 25,
//   stressLevel: 6,
//   job: {
//     title: 'Master',
//     company: 'Jedi'
//   },
//   location: {
//     city: 'Galactic City',
//     planet: 'Coruscant'
//   }
//   }).then(() => {
//     console.log('Data set.');
//   }).catch((e) => {
//     console.log('I have a bad feeling about this.', e);
//   });
// 
// 
// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Sith',
//   'location/city': 'Seattle'
//  }).then(() => {
//    console.log('Now Obi Wan\'s failure is complete');
//  }).catch((e) => {
//    console.log('These are not the results you\'re looking for', e)
//  });
// 
// database.ref('attributes').set({
//   height: 68,
//   weight: 175
// }).then(() => {
//   console.log('Data saved! Woohoo!');
// }).catch((e) => {
//   console.log('Oops, something went wrong.', e);
// });

// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('Data removed');
//   }).catch((e) => {
//     console.log('Uh-oh, something went wrong.');
//   });
