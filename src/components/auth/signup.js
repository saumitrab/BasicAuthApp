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
      passwordConfirmation: '',
      errorText: ''
    }
  }
  render() {
    return (
        <View style={styles.container}>
          <Text>Sign Up!</Text>

          <Text style={styles.label}>Username:</Text>
          <TextInput style={styles.input} 
            onChangeText={(text) => this.setState({username: text, errorText: ''})}
            value={this.state.username}/>

          <Text style={styles.label}>Password:</Text>
          <TextInput secureTextEntry={true} 
            style={styles.input}
            onChangeText={(text) => this.setState({password: text, errorText: ''})}
            value={this.state.password}/>

          <Text style={styles.label}>Confirm Password:</Text>
          <TextInput secureTextEntry={true} 
            style={styles.input}
            onChangeText={(text) => this.setState({passwordConfirmation: text, errorText: ''})}
            value={this.state.passwordConfirmation}/>

          <Text style={styles.errorText}>{this.state.errorText}</Text>

          <Button text="Sign Up" onPress={this.onSignupPress.bind(this)}></Button>
          <Button text="Already Have an account" onPress={this.onSigninPress.bind(this)}></Button>

        </View>
        );
  }
  onSigninPress() {
    this.props.navigator.pop();
  }
  onSignupPress(){
    if (this.state.password !== this.state.passwordConfirmation) {
      this.setState({errorText: 'Passwords mismatch'});
    } else if ( this.state.username == '' || this.state.password == '' ) {
      this.setState({errorText: 'Username or Password cannot be empty'});
    } else {
      // Firebase signup
      // on error, set errorText
      // on success: new route
      this.props.navigator.immediatelyResetRouteStack([{name: 'forum'}]); // notice array, we could put a list of route
    }

  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  errorText: {
    color: 'red'
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
