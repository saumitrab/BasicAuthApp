import React, { Component }  from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';

import Button from '../common/button';

class Signin extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Text>Sign In</Text>
          <Text style={styles.label}>Username:</Text>
          <TextInput style={styles.input}/>
          <Text style={styles.label}>Password:</Text>
          <TextInput secureTextEntry={true} style={styles.input}/>
          <Button text="blaah" onPress={null}></Button>
        </View>
        );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'  
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 200,
    alignSelf: 'center'
  },
  label: {
    fontSize: 18
  }
});

export default Signin;
