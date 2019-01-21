import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Timer from './src/components/Timer';
import MainButton from './src/components/MainButton';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minutes: '07',
            seconds: '00',
            headerText: 'READY',
            isClicked: false
        }
        this.secondsRemaining;
        this.intervalHandle;
        this.startCountDown = this.startCountDown.bind(this);
        this.restartCountDown = this.restartCountDown.bind(this);
        this.pauseCountDown = this.pauseCountDown.bind(this);
        this.tick = this.tick.bind(this);
    }

    tick() {
        let min = Math.floor(this.secondsRemaining / 60);
        let sec = this.secondsRemaining - (min * 60);
        console.log("min: ", min);
        console.log("sec: ", sec);

        this.setState({
          minutes: min,
          seconds: sec,
        })

        if (min < 4 && sec < 30) {
            this.setState({
                headerText: 'SECOND HALF'
            })
        } else {
            this.setState({
                headerText: 'FIRST HALF'
            })
        }

        if (sec < 10) {
          this.setState({
            seconds: "0" + this.state.seconds,
          })
        }

        if (min < 10) {
          this.setState({
            minutes: "0" + min,
          })
        }

        if (min === 0 & sec === 0) {
            clearInterval(this.intervalHandle);
        }

        this.secondsRemaining--
    }
    startCountDown() {
        this.intervalHandle = setInterval(this.tick, 1000);
        this.secondsRemaining = 7 * 60;
        this.setState({
            isClicked : true
        })
    }
    pauseCountDown() {
        clearInterval(this.intervalHandle);
    }
    restartCountDown() {
        this.intervalHandle = setInterval(this.tick, 1000);
    }
    render() {
        return (
              <View style={styles.container}>
                    <Header headerText={this.state.headerText}>
                    </Header>
                    <Timer minutes={this.state.minutes} seconds={this.state.seconds}/>
                    <MainButton />
                    <Text onPress={this.startCountDown} style={styles.containerText}>Splitdown App</Text>
                    <Text onPress={this.pauseCountDown} style={styles.containerText}>Pause</Text>
                    <Text onPress={this.restartCountDown} style={styles.containerText}>Restart</Text>
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
