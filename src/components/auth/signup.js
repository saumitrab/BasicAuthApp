import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet
} from 'react-native';

import Button from '../common/button';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      passwordConfirmation: ''
    }
  }
  render() {
    return (
        <View style={styles.container}>
          <Text>Sign Up!</Text>

          <Text style={styles.label}>Username:</Text>
          <TextInput style={styles.input} 
            onChangeText={(text) => this.setState({username: text})}
            value={this.state.username}/>

          <Text style={styles.label}>Password:</Text>
          <TextInput secureTextEntry={true} 
            style={styles.input}
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.password}/>

          <Text style={styles.label}>Confirm Password:</Text>
          <TextInput secureTextEntry={true} 
            style={styles.input}
            onChangeText={(text) => this.setState({passwordConfirmation: text})}
            value={this.state.passwordConfirmation}/>

          <Button text="Sign Up" onPress={this.onSignupPress.bind(this)}></Button>
          <Button text="Already Have an account" onPress={this.onSigninPress.bind(this)}></Button>

        </View>
        );
  }
  onSigninPress() {
    this.props.navigator.pop();
  }
  onSignupPress(){

  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
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

export default Signup;
