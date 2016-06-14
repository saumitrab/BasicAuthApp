import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Signin from './components/auth/signin';

class Main extends Component {
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
