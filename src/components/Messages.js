import React, { Component } from 'react';
import { View, Text, TouchableHighlight, ImageBackground, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { TextInput } from 'react-native-gesture-handler';
import { modifyMessage, sendMessage, chatsUserFetch } from '../actions/AppActions';
import _ from 'lodash';

class Messages extends Component {


    componentWillMount() {
        this.props.chatsUserFetch(this.props.contactEmail);
        this._createDataSource(this.props.messageList);
    }

    componentWillReceiveProps(nextProps) {
        debugger;
        this._createDataSource(nextProps.messageList);
    }

    _createDataSource(messageList) {
        this.setState({ messageList });
    }

    _sendMessage() {
        const { message, contactName, contactEmail } = this.props;
        this.props.sendMessage(message, contactName, contactEmail);
    }

    _renderItem(data) {
        debugger;
        return (

            <View style={{ flex: 1, padding: 20, borderBottomWidth: 1, borderColor: '#CCC' }}>
                <Text style={{ fontSize: 25 }}>{data.text.message}</Text>
                <Text style={{ fontSize: 18 }}>{data.text.type}</Text>
            </View>
        )
    }

    render() {
        return (
            <View style={{ flex: 1, marginTop: 50, backgroundColor: '#eee4dc', padding: 10 }}>
                <View style={{ flex: 1, paddingBottom: 20 }}>
                    <FlatList
                        data={this.state.messageList}
                        renderItem={this._renderItem}
                    />
                </View>
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
    const messageList = _.map(state.ListMessageReducer, (val, uid) => {
        return { ...val, uid };
    });
    return {
        messageList,
        message: state.AppReducer.message
    };
}

export default connect(mapStateToProps, { modifyMessage, sendMessage, chatsUserFetch })(Messages);