import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class Messages extends Component {

    render() {
        return (
            <View>
                <Text>Messages</Text>
            </View>
        )
        
    }
}

export default connect(null, {})(Messages);