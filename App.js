import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Timer from './src/components/Timer';
import MainButton from './src/components/MainButton';

export default class App extends React.Component {
    state = {
        time: '07:00',
        headerText: 'READY'
    }
    render() {
        return (
              <View style={styles.container}>
                    <Header headerText={this.state.headerText}>
                    </Header>
                    <Timer>
                        {this.state.time}
                    </Timer>
                    <MainButton />
                    <Text style={styles.containerText}>Splitdown App</Text>
              </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#fff',
  },
  containerText: {
      color: '#555'
  }
});
