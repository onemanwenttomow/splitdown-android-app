import React from 'react';
import { Text, View } from 'react-native';

const MainButton = () => {
    return (
        <View>
            <Image
                style={{width: 25, height: 25, marginRight: 20}}
                source={require('../assets/slider-track.png')}
            />
        </View>
    )
}

export default MainButton;
