import React from 'react';
import { View, TextInput, Button, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { modifyEmail, modifyPassword, modifyName } from '../actions/AuthenticationAction';

const formRegister = props => {
    return (
        <ImageBackground style={{ flex: 1, width: null }} source={require('../img/bg.png')}>
            <View style={{ flex: 1, padding: 10 }}>
                <View style={{ flex: 4, justifyContent: 'center' }}>
                    <TextInput value={props.name} placeholder="Name" placeHolderTextColor="#fff" placeholderTextColor="#fff" style={{ fontSize: 20, height: 45 }} onChangeText={text => props.modifyName(text)} />
                    <TextInput value={props.email} placeholder="E-mail" placeHolderTextColor="#fff" placeholderTextColor="#fff" style={{ fontSize: 20, height: 45 }} onChangeText={text => props.modifyEmail(text)} />
                    <TextInput secureTextEntry value={props.password} placeholder="Password" placeholderTextColor="#fff" style={{ fontSize: 20, height: 45 }} onChangeText={text => props.modifyPassword(text)} />
                </View>
                <View style={{ flex: 1 }}>
                    <Button title="Sign Up" color="#115E54" onPress={() => false} />
                </View>
            </View>
        </ImageBackground>
    )
}

const mapStateToProps = state => (
    {
        name: state.AuthenticationReducer.name,
        email: state.AuthenticationReducer.email,
        password: state.AuthenticationReducer.password,
    }
)

export default connect(mapStateToProps, { modifyEmail, modifyPassword, modifyName })(formRegister);