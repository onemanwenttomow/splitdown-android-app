import React from 'react';
import { View, Text } from 'react-native';

const Timer = ({minutes, seconds}) => {
    return (
        <View style={styles.timerContainer}>
            <Text style={styles.timerText}>{minutes}:{seconds}</Text>
        </View>
    )
}

const styles = {
    timerContainer: {
        backgroundColor: '#555555',
        height: 200,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
    },
    timerText: {
        color: '#fff',
        fontSize: 135,
        fontWeight: '200'
    }
}

export default Timer;
