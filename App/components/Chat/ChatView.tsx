import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import ChatHeader from './ChatHeader';

const {height} = Dimensions.get('window');

const ChatView = () => {
    return(
        <View style={styles.container}>
            <ChatHeader username='Anna_kendrick' active />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: height,
        width: '100%',
        backgroundColor: '#fff'
    }
});

export default ChatView;