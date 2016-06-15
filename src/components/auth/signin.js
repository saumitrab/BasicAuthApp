import React, { Component }  from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';

import Button from '../common/button';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }
  render() {
    // we update the state, thus calling render(), to keep the typed text persistant, read value from state! mind = blown
    // Controlled state: Value is set by state, not by what user types
    return (
        <View style={styles.container}>
          <Text>Sign In</Text>

          <Text style={styles.label}>Username:</Text>
          <TextInput style={styles.input} 
            onChangeText={(text) => this.setState({username: text})}
            value={this.state.username}/>

          <Text style={styles.label}>Password:</Text>
          <TextInput secureTextEntry={true} 
            style={styles.input}
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.password}/>

          <Button text="Sign In" onPress={this.onPress.bind(this)}></Button>
        </View>
        );
  }
  onPress() {
    this.setState({
      password: ''
    });
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
