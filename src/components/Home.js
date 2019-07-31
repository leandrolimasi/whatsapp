import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import TabBarMenu from './TabBarMenu';
import Contacts from './Contacts';
import Chats from './Chats';

export default class Home extends Component {
    state = {
        index: 0,
        routes: [
            { key: 'first', title: 'Chats' },
            { key: 'second', title: 'Contacts' },
        ],
    };

    _renderTabBar = props => <TabBarMenu {...props} />

    render() {
        return (
            <TabView
                navigationState={this.state}
                renderTabBar={this._renderTabBar}
                renderScene={SceneMap({
                    first: Chats,
                    second: Contacts,
                })}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('window').width }}
            />
        );
    }
}

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
});