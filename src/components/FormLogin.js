import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableHighlight, ImageBackground, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modifyEmail, modifyPassword, authenticateUser } from '../actions/AuthenticationAction';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#115e54'
    }
})

class FormLogin extends Component {

    _authenticate() {
        const { email, password } = this.props;
        this.props.authenticateUser({ email, password });
    }

    renderBtnLogin() {
        if (this.props.loadingLogin) {
            return (
                <ActivityIndicator size="large" />
            )
        }
        return (
            <Button title="Log In" buttonStyle={styles.button} onPress={() => this._authenticate()} />
        )
    }

    render() {
        return (
            <ImageBackground style={{ flex: 1, width: null }} source={require('../img/bg.png')}>
                <View style={{ flex: 1, padding: 10 }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 25, backgroundColor: 'transparent', color: '#fff' }} > WhatsApp Clone</Text >
                    </View >
                    <View style={{ flex: 2 }}>
                        <TextInput autoCapitalize='none' value={this.props.email} style={{ fontSize: 20, height: 45 }} placeholder='E-mail' placeholderTextColor="#fff" onChangeText={text => this.props.modifyEmail(text)} />
                        <TextInput secureTextEntry value={this.props.password} style={{ fontSize: 20, height: 45 }} placeholder='Password' placeholderTextColor="#fff" placeHolderTextColor="#fff" onChangeText={text => this.props.modifyPassword(text)} />
                        <TouchableHighlight onPress={() => Actions.formRegister()}>
                            <Text style={{ fontSize: 20, color: '#fff' }}> Join us? Sign Up</Text >
                        </TouchableHighlight>
                    </View >
                    <Text style={{ color: '#ff0000', fontSize: 18 }}>
                        {this.props.authenticateError}
                    </Text>
                    <View style={{ flex: 2 }} >
                        {this.renderBtnLogin()}
                    </View >
                </View >
            </ImageBackground>
        );
    }
}

const mapStateToProps = state => (
    {
        email: state.AuthenticationReducer.email,
        password: state.AuthenticationReducer.password,
        authenticateError: state.AuthenticationReducer.authenticateError,
        loadingLogin: state.AuthenticationReducer.loadingLogin
    }
)

const mapDispatchToProps = {
    modifyEmail,
    modifyPassword,
    authenticateUser
}

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);