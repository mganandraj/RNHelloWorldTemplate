import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class HelloWorldComponent extends Component {
  render() {
    return (
      <View>
        <Text>
          Hello World!
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('HelloWorldComponent', () => HelloWorldComponent);
