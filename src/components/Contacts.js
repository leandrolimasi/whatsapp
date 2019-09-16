import React, { Component } from 'react';
import { View, Text, FlatList, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { contactUserFetch } from '../actions/AppActions';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';

class Contacts extends Component {

    componentWillMount() {
        this.props.contactUserFetch();
        this._createDataSource(this.props.contacts);
    }

    componentWillReceiveProps(nextProps) {
        this._createDataSource(nextProps.contacts);
    }

    _createDataSource(contacts) {
        this.setState({ contacts });
    }

    _renderItem(data) {
        return (
            <TouchableHighlight onPress={() => Actions.message({ title: data.item.name, contactName: data.item.name, contactEmail: data.item.email })}>
                <View style={{ flex: 1, padding: 20, borderBottomWidth: 1, borderColor: '#CCC' }}>
                    <Text style={{ fontSize: 25 }}>{data.item.name}</Text>
                    <Text style={{ fontSize: 18 }}>{data.item.email}</Text>
                </View>
            </TouchableHighlight>
        )
    }

    render() {
        return (
            <FlatList
                data={this.state.contacts}
                renderItem={this._renderItem}
            />
        )
    }
}

const mapStateToProps = state => {
    const contacts = _.map(state.ContactListReducer, (val, uid) => {
        return { ...val, uid }
    });
    return { contacts };
}

export default connect(mapStateToProps, { contactUserFetch })(Contacts);