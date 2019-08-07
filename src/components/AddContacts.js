import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { modifyAddContactEmail, addContact } from '../actions/AppActions';

const AddContact = props => (
    <View style={{ flex: 1, justifyContent: 'center', padding: 40 }}>

        <View style={{ flex: 1, justifyContent: 'center' }}>
            <TextInput
                autoCapitalize='none'
                placeholder='E-mail'
                style={{ fontSize: 20, height: 45 }}
                value={props.addContactEmail}
                onChangeText={(text) => props.modifyAddContactEmail(text)}
                onChange={() => false}
            />
        </View>

        <View style={{ flex: 1 }}>
            <Button buttonStyle={{ backgroundColor: "#115e54" }} title="Add" onPress={() => props.addContact(props.addContactEmail)} />

            <Text style={{ fontSize: 20, color: "#FF0000"}}>
                {props.addContactError}
            </Text>
        </View>

    </View>
)


const mapStateToProps = state => (
    {
        addContactEmail: state.AppReducer.addContactEmail,
        addContactError: state.AppReducer.addContactError
    }
)

export default connect(mapStateToProps, { modifyAddContactEmail, addContact})(AddContact);
