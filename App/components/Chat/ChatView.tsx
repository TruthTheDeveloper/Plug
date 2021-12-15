import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import ChatHeader from './ChatHeader';
import ChatInputBar from './ChatInputBar';

const {height} = Dimensions.get('window');

const ChatView = () => {
    const [text, setText] = useState<any>();

    return(
        <View style={styles.container}>
            <ChatHeader username='Anna_kendrick' active />
            <View style={styles.chatSection} />
            <ChatInputBar text={text} setText={(e:string) => setText(e)} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: height,
        width: '100%',
        backgroundColor: '#fff'
    },
    chatSection: {
        height: height - 135,
        backgroundColor: '#FFF'
    }
});

export default ChatView;