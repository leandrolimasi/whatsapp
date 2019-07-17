import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default props => {
    return (
        <ImageBackground style={{ flex: 1, width: null }} source={require('../img/bg.png')}>
            <View style={{ flex: 1, padding: 15 }}>
                <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, color: '#fff' }} >Welcome</Text>
                    <Image source={require('../img/logo.png')} />
                </View>
                <View style={{ flex: 1 }}>
                    <Button title="Sign In" onPress={() => false} />
                </View>
            </View>
        </ImageBackground>
    )
}

