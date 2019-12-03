const firebase = require('firebase');

var firebaseConfig = {
  //Using a different firebase to test
  apiKey: "AIzaSyCyDdSnRBD_HSI9YAW375A9Q_rZPcQtxHc",authDomain: "source-app-a51fc.firebaseapp.com",databaseURL: "https://source-app-a51fc.firebaseio.com",projectId: "source-app-a51fc",
  storageBucket: "source-app-a51fc.appspot.com",messagingSenderId: "922500996195",appId: "1:922500996195:web:87c66b22ffe2ab4606ec56"  
  
  //apiKey: "AIzaSyBfmGpY3KOpnWVL6-l_yWyvh88GwUQu6S4",authDomain: "logintest-368d7.firebaseapp.com",databaseURL: "https://logintest-368d7.firebaseio.com",
  //projectId: "logintest-368d7",storageBucket: "logintest-368d7.appspot.com",messagingSenderId: "1091735092463",appId: "1:1091735092463:web:b2ef63bcef18b6f00d6f1a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  module.exports = firebase;