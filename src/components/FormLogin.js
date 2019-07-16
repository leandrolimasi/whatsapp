import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableHighlight, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modifyEmail, modifyPassword } from '../actions/AuthenticationAction';

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#115e54'
    }
})

const formLogin = props => {
    return (
        <ImageBackground style={{ flex: 1, width: null }} source={require('../img/bg.png')}>
            <View style={{ flex: 1, padding: 10 }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 25, backgroundColor: 'transparent', color: '#fff' }} > WhatsApp Clone</Text >
                </View >
                <View style={{ flex: 2 }}>
                    <TextInput value={props.email} style={{ fontSize: 20, height: 45 }} placeholder='E-mail' placeholderTextColor="#fff" onChangeText={text => props.modifyEmail(text)} />
                    <TextInput secureTextEntry value={props.password} style={{ fontSize: 20, height: 45 }} placeholder='Password' placeholderTextColor="#fff" placeHolderTextColor="#fff" onChangeText={text => props.modifyPassword(text)} />
                    <TouchableHighlight onPress={() => Actions.formRegister()}>
                        <Text style={{ fontSize: 20, color: '#fff' }}> Join us? Sign Up</Text >
                    </TouchableHighlight>
                </View >
                <View style={{ flex: 2 }} >
                    <Button title="Log In" style={styles.button} onPress={() => false} />
                </View >
            </View >
        </ImageBackground>
    );
}

const mapStateToProps = state => (
    {
        email: state.AuthenticationReducer.email,
        password: state.AuthenticationReducer.password
    }
)

export default connect(mapStateToProps, { modifyEmail, modifyPassword })(formLogin);