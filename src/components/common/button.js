import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

class Button extends Component {
  render() {
    return (
      <TouchableHighlight style={styles.button} underlayColor={'gray'}>
        <Text style={styles.text}></Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.createClass({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    borderColor: 'black',
    marginTop: 10
  }
  text: {
   flex: 1,
   alignSelf: 'center',
   fontSize: 20
  }

});
