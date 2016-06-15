import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Signin from './components/auth/signin';
//const firebase = require('firebase');
// import firebase from 'firebase';

class Main extends Component {
  componentWillMount() {
    // <script src="https://www.gstatic.com/firebasejs/live/3.0/firebase.js"></script>
    // <script>
    // Initialize Firebase
    // const config = {
    //  apiKey: "AIzaSyAjpOsnJy0QBqJe6zNseA0_CUbqU-QifZo",
    //  authDomain: "basicauthapp.firebaseapp.com",
    //  databaseURL: "https://basicauthapp.firebaseio.com",
    //  storageBucket: "basicauthapp.appspot.com",
    //};
    //firebase.initializeApp(config);
    //</script>
  }
  render() {
    return (
      <View style={styles.container}>
        <Signin> BOTH </Signin>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Main;
