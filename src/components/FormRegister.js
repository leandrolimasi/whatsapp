import React, { Component } from 'react';
import { View, TextInput, ImageBackground, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { modifyEmail, modifyPassword, modifyName, registerUser } from '../actions/AuthenticationAction';

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#115e54'
    }
})

class FormRegister extends Component {

    _registerUser() {
        const { name, email, password } = this.props;
        this.props.registerUser({ name, email, password });
    }

    renderBtnRegister() {
        if (this.props.loadingRegister) {
            return (
                <ActivityIndicator size="large" />
            )
        }
        return (
            <Button title="Sign Up" buttonStyle={styles.button} onPress={() => this._registerUser()} />
        )
    }

    render() {
        return (
            <ImageBackground style={{ flex: 1, width: null }} source={require('../imgs/bg.png')}>
                <View style={{ flex: 1, padding: 10 }}>
                    <View style={{ flex: 4, justifyContent: 'center' }}>
                        <TextInput value={this.props.name} placeholder="Name" placeHolderTextColor="#fff" placeholderTextColor="#fff" style={{ fontSize: 20, height: 45 }} onChangeText={text => this.props.modifyName(text)} />
                        <TextInput autoCapitalize='none' value={this.props.email} placeholder="E-mail" placeHolderTextColor="#fff" placeholderTextColor="#fff" style={{ fontSize: 20, height: 45 }} onChangeText={text => this.props.modifyEmail(text)} />
                        <TextInput secureTextEntry value={this.props.password} placeholder="Password" placeholderTextColor="#fff" style={{ fontSize: 20, height: 45 }} onChangeText={text => this.props.modifyPassword(text)} />
                        <Text style={{ color: '#ff0000', fontSize: 18 }}>{this.props.registerError}</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        {this.renderBtnRegister()}
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

const mapStateToProps = state => (
    {
        name: state.AuthenticationReducer.name,
        email: state.AuthenticationReducer.email,
        password: state.AuthenticationReducer.password,
        registerError: state.AuthenticationReducer.registerError,
        loadingRegister: state.AuthenticationReducer.loadingRegister
    }
)

export default connect(mapStateToProps, { modifyEmail, modifyPassword, modifyName, registerUser })(FormRegister);