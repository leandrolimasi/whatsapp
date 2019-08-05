import React from 'react';
import { View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';

const AddContact = props => (
    <View style={{ flex: 1, justifyContent: 'center', padding: 40 }}>

        <View style={{ flex: 1, justifyContent: 'center' }}>
            <TextInput
                placeholder='E-mail'
                style={{ fontSize: 20, height: 45 }}
                value={props.addContactEmail}
                onChange={() => false}
            />
        </View>

        <View style={{ flex: 1 }}>
            <Button buttonStyle={{ backgroundColor: "#115e54" }} title="Adicionar" onPress={() => false} />
        </View>

    </View>
)


const mapStateToProps = state => (
    {
        addContactEmail: state.AppReducer.addContactEmail
    }
)

export default connect(mapStateToProps, null)(AddContact);
