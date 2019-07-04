import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#115e54'
    }
})

export default props => (
    <View style={{ flex: 1, padding: 10 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 25 }} > WhatsApp Clone</Text >
        </View >
        <View style={{ flex: 2 }}>
            <TextInput style={{ fontSize: 20, height: 45 }} placeholder='E-mail' />
            <TextInput style={{ fontSize: 20, height: 45 }} placeholder='Password' />
            <Text style={{ fontSize: 20 }}> Sign Up</Text >
        </View >
        <View style={{ flex: 2 }} >
            <Button title="Log In" buttonStyle={styles.button} onPress={() => false} />
        </View >
    </View >
);
