import React, { Component } from 'react';
import { View, TextInput, ImageBackground, StyleSheet } from 'react-native';
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

    render() {
        return (
            <ImageBackground style={{ flex: 1, width: null }} source={require('../img/bg.png')}>
                <View style={{ flex: 1, padding: 10 }}>
                    <View style={{ flex: 4, justifyContent: 'center' }}>
                        <TextInput value={this.props.name} placeholder="Name" placeHolderTextColor="#fff" placeholderTextColor="#fff" style={{ fontSize: 20, height: 45 }} onChangeText={text => this.props.modifyName(text)} />
                        <TextInput value={this.props.email} placeholder="E-mail" placeHolderTextColor="#fff" placeholderTextColor="#fff" style={{ fontSize: 20, height: 45 }} onChangeText={text => this.props.modifyEmail(text)} />
                        <TextInput secureTextEntry value={this.props.password} placeholder="Password" placeholderTextColor="#fff" style={{ fontSize: 20, height: 45 }} onChangeText={text => this.props.modifyPassword(text)} />
                    </View>
                    <View style={{ flex: 2 }}>
                        <Button title="Sign Up" buttonStyle={styles.button} onPress={() => this._registerUser()} />
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
    }
)

export default connect(mapStateToProps, { modifyEmail, modifyPassword, modifyName, registerUser })(FormRegister);