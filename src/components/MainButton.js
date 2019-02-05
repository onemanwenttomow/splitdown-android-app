import React from 'react';
import { View, Image, Switch } from 'react-native';

const MainButton = () => {
    return (
        <View style={styles.container}>
            <Switch
                trackColor = '#d9d9d9'
            />

        </View>
    )
}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 100
    },
    rockerBackground: {
        width: 190,
        height: 59
    }
}

export default MainButton;
