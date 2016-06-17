import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

class Signup extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Text>You can signup here.</Text>
        </View>
        );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});

export default Signup;
