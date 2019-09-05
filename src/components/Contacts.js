import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { contactUserFetch } from '../actions/AppActions';
import _ from 'lodash';

class Contacts extends Component {

    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 });
        this.state = { dataSource: ds.cloneWithRows([]) };
    }

    componentWillMount() {
        this.props.contactUserFetch();
        this._createDataSource(this.props.contacts);
    }

    componentWillReceiveProps(nextProps) {
        this._createDataSource(this.props.contacts);
    }

    _createDataSource(contacts) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 });
        this.dataSource =  ds.cloneWithRows(contacts);
    }

    render() {
        return (
            <FlatList>
                data={this.dataSource}
                renderItem={data => (
                    <View style={{flex: 1, padding: 20, borderBottomWidth: 1, borderColor: '#CCC'}}>
                        <Text style={{ fontSize: 25 }}>{data.name}</Text>
                        <Text style={{ fontSize: 18 }}>{data.email}</Text>
                    </View>
                )}
            </FlatList>
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