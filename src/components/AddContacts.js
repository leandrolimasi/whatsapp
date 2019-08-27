import React, {Component} from 'react';
import { View, TextInput, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { modifyAddContactEmail, addContact } from '../actions/AppActions';

class AddContact extends Component {

    renderAddContact() {
        if (!this.props.contactRegisterResult) {
            return (
                <View style={{ flex: 1 }}>

                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <TextInput
                            autoCapitalize='none'
                            placeholder='E-mail'
                            style={{ fontSize: 20, height: 45 }}
                            value={this.props.addContactEmail}
                            onChangeText={(text) => this.props.modifyAddContactEmail(text)}
                            onChange={() => false}
                        />
                    </View>

                    <View style={{ flex: 1 }}>
                        <Button buttonStyle={{ backgroundColor: "#115e54" }} title="Add" onPress={() => this.props.addContact(this.props.addContactEmail)} />

                        <Text style={{ fontSize: 20, color: "#FF0000" }}>
                            {this.props.addContactError}
                        </Text>
                    </View>

                </View>
            )
        } else {

            return (
                <View>
                    <Text style={{fontSize: 20}}>
                        Contact Register Sucessfully!
                    </Text>
                </View>
            )
            
        }
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', padding: 40 }}>
                {this.renderAddContact()}
            </View>
        )
    }
}

const mapStateToProps = state => (
    {
        addContactEmail: state.AppReducer.addContactEmail,
        addContactError: state.AppReducer.addContactError,
        contactRegisterResult: state.AppReducer.contactRegisterResult
    }
)

export default connect(mapStateToProps, { modifyAddContactEmail, addContact})(AddContact);
