import React from 'react';
import { View, Text } from 'react-native';


const Timer = () => {
    return (
        <View style={styles.timerContainer}>
            <Text >07:00</Text>
        </View>
    )
}

const styles = {
    timerContainer: {
        backgroundColor: '#555555',
        height: 200,
        paddingTop: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'collumn',
    },
    textStyle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '400',
        textTransform: 'uppercase',
        marginLeft: 20
    }
}

export default Timer;
