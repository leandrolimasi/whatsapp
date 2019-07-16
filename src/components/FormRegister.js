import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { modifyEmail, modifyPassword, modifyName } from '../actions/AuthenticationAction';

const formRegister = props => {
    return (
        <View style={{ flex: 1, padding: 10 }}>
            <View style={{ flex: 4, justifyContent: 'center' }}>
                <TextInput value={props.name} placeholder="Name" style={{ fontSize: 20, height: 45 }} onChangeText={text => props.modifyName(text)} />
                <TextInput value={props.email} placeholder="E-mail" style={{ fontSize: 20, height: 45 }} onChangeText={text => props.modifyEmail(text)} />
                <TextInput secureTextEntry value={props.password} placeholder="Password" style={{ fontSize: 20, height: 45 }} onChangeText={text => props.modifyPassword(text)} />
            </View>
            <View style={{ flex: 1 }}>
                <Button title="Sign Up" color="#115E54" onPress={() => false} />
            </View>
        </View>
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