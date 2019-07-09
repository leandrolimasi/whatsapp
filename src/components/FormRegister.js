import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';

const formRegister = props => {
    return (
        <View style={{ flex: 1, padding: 10 }}>
            <View style={{ flex: 4, justifyContent: 'center' }}>
                <TextInput value={props.name} placeholder="Name" style={{ fontSize: 20, height: 45 }} />
                <TextInput value={props.email} placeholder="E-mail" style={{ fontSize: 20, height: 45 }} />
                <TextInput value={props.password} placeholder="Password" style={{ fontSize: 20, height: 45 }} />
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

export default connect(mapStateToProps, null)(formRegister);