import React from 'react';
import { View, TextInput } from 'react-native';
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
            <Button buttonStyle={{ backgroundColor: "#115e54" }} title="Adicionar" onPress={() => props.addContact(props.addContactEmail)} />
        </View>

    </View>
)


const mapStateToProps = state => (
    {
        addContactEmail: state.AppReducer.addContactEmail
    }
)

export default connect(mapStateToProps, { modifyAddContactEmail, addContact})(AddContact);
