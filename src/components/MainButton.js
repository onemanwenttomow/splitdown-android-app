import React from 'react';
import { Text, View, Image } from 'react-native';

const MainButton = () => {
    return (
        <View>
            <Image
                style={{width: 300, height: 150}}
                source={require('../assets/slider-track.png')}
            />
        </View>
    )
}

export default MainButton;
