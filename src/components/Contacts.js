import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { contactUserFetch } from '../actions/AppActions';
import _ from 'lodash';
import { thisExpression } from '@babel/types';

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

    render() {
        return (
            <FlatList
                data={this.state.contacts}
                renderItem={({ item }) =>
                    <View style={{ flex: 1, padding: 20, borderBottomWidth: 1, borderColor: '#CCC' }}>
                        <Text style={{ fontSize: 25 }}>{item.name}</Text>
                        <Text style={{ fontSize: 18 }}>{item.email}</Text>
                    </View>}
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