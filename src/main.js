import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator
} from 'react-native';

import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import Forum  from './components/forum/forum';

//import firebase from 'firebase';

const ROUTES = {
  signin: Signin,
  signup: Signup,
  forum: Forum
};

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

  renderScene(route, navigator) {
    // What we return will be placed on the stack
    const MComponent = ROUTES[route.name]; // signin
    return <MComponent route={route} navigator={navigator} />;
  }

  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{name: 'signin'}}
        renderScene={this.renderScene}
        configureScene={() => {return Navigator.SceneConfigs.FloatFromRight;}}
      />
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Main;
