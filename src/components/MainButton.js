import React from 'react';
import { View, Text } from 'react-native';
import Draggable from 'react-native-draggable';

class MainButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonText: '>> slide to start',
        }
        this.changeButtonText = this.changeButtonText.bind(this)
    }
    changeButtonText() {
        this.setState({
            buttonText: 'slide to pause <<'
        })
    }
    render() {
        return (
            <View style={styles.container}>
                    <Draggable renderShape='image' imageSource={require('../assets/playbutton.png')} renderSize={100}
                        offsetX={-80} offsetY={-196}
                        longPressDrag={this.changeButtonText}
                        pressDrag={()=> this.changeButtonText }
                        pressInDrag={this.changeButtonText}
                        pressOutDrag={this.changeButtonText}
                    />
                    <Text style={styles.textStyle}> {this.state.buttonText}</Text>
            </View>
        )
    }

}

const styles = {
    container: {
        flex: 1,
        backgroundColor: "#d9d9d9",
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 140,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        color: '#555555',
        fontSize: 17,
    }
}

export default MainButton;
