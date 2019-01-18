import React from 'react';
import { View, Text, Image } from 'react-native';

const Header = ({headerText}) => {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.textStyle}>7</Text>
            <Text style={styles.textStyle}>{headerText}</Text>
            <Image
                style={{width: 25, height: 25, marginRight: 20}}
                source={require('../assets/nostop.png')}
            />
        </View>
    )
}

const styles = {
    containerStyle: {
        backgroundColor: '#555555',
        height: 90,
        paddingTop: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    textStyle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '400',
        textTransform: 'uppercase',
        marginLeft: 20
    }
}

export default Header;
