import React, { Component } from 'react';
import { View, Text, TouchableHighlight, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { TextInput } from 'react-native-gesture-handler';
import { modifyMessage, sendMessage } from '../actions/AppActions';

class Messages extends Component {

    _sendMessage() {
        const { message, contactName, contactEmail } = this.props;
        this.props.sendMessage(message, contactName, contactEmail);
    }

    render() {
        return (
            <View style={{ flex: 1, marginTop: 50, backgroundColor: '#eee4dc', padding: 10 }}>
                <View style={{ flex: 1, paddingBottom: 20 }}></View>
                <View style={{ flexDirection: 'row', height: 60 }}>
                    <TextInput value={this.props.message}
                        onChangeText={text => this.props.modifyMessage(text)} style={{ flex: 4, backgroundColor: '#fff', fontSize: 18 }} />
                    <TouchableHighlight onPress={this._sendMessage.bind(this)} underlayColor='#fff'>
                        <ImageBackground style={{ flex: 1, width: 60 }} source={require('../imgs/send-message.png')} />
                    </TouchableHighlight>
                </View>
            </View>
        )

    }
}

const mapStateToProps = state => {
    return { message: state.AppReducer.message };
}

export default connect(mapStateToProps, { modifyMessage, sendMessage })(Messages);