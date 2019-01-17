import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Timer from './src/components/Timer';

export default class App extends React.Component {

    render() {
        return (
              <View style={styles.container}>
                    <Header />
                    <Timer />
                    <Text style={styles.containerText}>Splitdown App</Text>
              </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#fff',
  },
  containerText: {
      color: '#555'
  }
});
