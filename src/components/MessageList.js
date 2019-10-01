import React, { Component } from 'react';
import { View, Text, FlatList, TouchableHighlight } from 'react-native';
import { chatListUserFetch } from '../actions/AppActions';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';

class MessageList extends Component {

    componentWillMount() {
        this.props.chatListUserFetch();
        this._createDataSource(this.props.messageList);
    }

    componentWillReceiveProps(nextProps) {
        this._createDataSource(nextProps.messageList);
    }

    _createDataSource(messageList) {
        this.setState({ messageList });
    }

    _renderItem(data) {
        return (
            <TouchableHighlight onPress={() => Actions.message({ title: data.item.name, contactName: data.item.name, contactEmail: data.item.email })}>
                <View style={{ flex: 1, padding: 20, borderBottomWidth: 1, borderColor: '#CCC' }}>
                    <Text style={{ fontSize: 25 }}>{data.item.name}</Text>
                </View>
            </TouchableHighlight>
        )
    }

    render() {
        return (
            <FlatList
                data={this.state.messageList}
                renderItem={this._renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        )
    }
}

const mapStateToProps = state => {
    const messageList = _.map(state.ListChatReducer, (val, uid) => {
        return { ...val, uid };
    });
    return {
        messageList
    };
}

export default connect(mapStateToProps, { chatListUserFetch })(MessageList);