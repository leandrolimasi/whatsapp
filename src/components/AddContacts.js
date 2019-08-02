import React from 'react';
import { View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

export default props => (
    <View style={{ flex: 1, justifyContent: 'center', padding: 40 }}>

        <View style={{ flex: 1, justifyContent: 'center' }}>
            <TextInput
                placeholder='E-mail'
                style={{ fontSize: 20, height: 45 }}
                onChange={() => false}
            />
        </View>

        <View style={{ flex: 1 }}>
            <Button buttonStyle={{ backgroundColor: "#115e54" }} title="Adicionar" onPress={() => false} />
        </View>

    </View>
)
