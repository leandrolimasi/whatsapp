import React, {Component} from 'react';
import { View, Text, FlatList } from 'react-native';
import { chatListUserFetch } from '../actions/AppActions';
import { connect } from 'react-redux';

class MessageList extends Component {

    componentWillMount() {
        this.props.chatListUserFetch();
    }

    componentWillReceiveProps(nextProps) {
        this._createDataSource(nextProps.messageList);
    }

    _createDataSource(messageList) {
        this.setState({ messageList });
    }

    render() {
        return (
            <Text>Chats</Text>
        )
    }
}

const mapStateToProps = state => {
    const messageList = _.map(state.ListMessageReducer, (val, uid) => {
        return { ...val, uid };
    });
    return {
        messageList
    };
}

export default connect(mapStateToProps, { chatListUserFetch })(MessageList);