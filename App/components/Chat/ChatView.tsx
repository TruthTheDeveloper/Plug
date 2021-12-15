import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native';

import ChatHeader from './ChatHeader';
import ChatInputBar from './ChatInputBar';
import ChatItem from './ChatItem';

const {height} = Dimensions.get('window');

const ChatView = () => {
    const [text, setText] = useState<any>();
    const [chats, setChats] = useState([
        {id: 0, sender: 'Anna_kendrick', message: "Hello world Anna, I think we've met somewhere in school" },
        {id: 1, sender: 'maria', message: "I don't think I remember seeing you. Mind sending me another of your pic?" },
    ])

    return(
        <View style={styles.container}>
            <ChatHeader username='Anna_kendrick' active back={() => console.log('bACK')} />
            <View style={styles.chatSection}>
                <FlatList 
                    data={chats}
                    keyExtractor={item => item.sender}
                    renderItem={({item}) => <ChatItem id={item.id} message={item.message} />}
                />
            </View>
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