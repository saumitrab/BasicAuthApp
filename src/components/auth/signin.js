import React, { Component }  from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';

class Signin extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Text>Sign In</Text>
        </View>
        );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'  
  }
});

export default Signin;
