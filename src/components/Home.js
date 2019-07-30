import React, {Component} from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

const ChatRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);

const ContactRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

export default class Home extends Component {
    state = {
        index: 0,
        routes: [
            { key: 'first', title: 'Chats' },
            { key: 'second', title: 'Contacts' },
        ],
    };

    render() {
        return (
            <TabView
                navigationState={this.state}
                renderScene={SceneMap({
                    first: ChatRoute,
                    second: ContactRoute,
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