import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#115e54'
    }
})

const formLogin = props => {
    console.log(props);
    return (
        <View style={{ flex: 1, padding: 10 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 25 }} > WhatsApp Clone</Text >
            </View >
            <View style={{ flex: 2 }}>
                <TextInput value={props.email} style={{ fontSize: 20, height: 45 }} placeholder='E-mail' />
                <TextInput value={props.password} style={{ fontSize: 20, height: 45 }} placeholder='Password' />
                <TouchableHighlight onPress={() => Actions.formRegister()}>
                    <Text style={{ fontSize: 20 }}> Join us? Sign Up</Text >
                </TouchableHighlight>
            </View >
            <View style={{ flex: 2 }} >
                <Button title="Log In" buttonStyle={styles.button} onPress={() => false} />
            </View >
        </View >
    );
}

const mapStateToProps = state => (
    {
        email: state.AuthenticationReducer.email,
        password: state.AuthenticationReducer.password
    }
)

export default connect(mapStateToProps, null)(formLogin);