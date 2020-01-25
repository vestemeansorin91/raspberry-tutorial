var firebaseConfig = {
  apiKey: 'AIzaSyDr4afiXr0EvXgMyanjmB4qZYspuuKUiPM',
  authDomain: 'raspberry-sorin.firebaseapp.com',
  databaseURL: 'https://raspberry-sorin.firebaseio.com',
  projectId: 'raspberry-sorin',
  storageBucket: 'raspberry-sorin.appspot.com',
  messagingSenderId: '877000624771',
  appId: '1:877000624771:web:2d4fd42d3bacd1647669b6',
  measurementId: 'G-XJQZCEP6P7'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let rootRef = firebase
  .database()
  .ref()
  .child('distances');

let value;
rootRef.on('value', function(snapshot) {
  value = snapshot
    .child('1')
    .child('distance')
    .val();
  $('#load-content').html(value.toFixed(2) + ' cm');
});
