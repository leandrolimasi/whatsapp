import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

export default props => {
    return (
        <ImageBackground style={{ flex: 1, width: null }} source={require('../img/bg.png')}>
            <View>
                <Text>Home!</Text>
            </View>
        </ImageBackground>
    )
}