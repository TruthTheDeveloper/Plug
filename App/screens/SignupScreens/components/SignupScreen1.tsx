import React from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput } from 'react-native';

import EmojiHeader from './EmojiHeader';
import StatusBar from './StatusBar';

const {height} = Dimensions.get('window');

const SignupScreen1 = () => {
    return(
        <View style={styles.container}>
            <EmojiHeader />
            <StatusBar />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: height,
        width: '100%',
    },
    input: {
        width: '100%',
        borderColor: '#000',
        borderWidth: 1
    }
})

export default SignupScreen1;