import React, { useState, FC, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, BackHandler, Keyboard, EmitterSubscription } from 'react-native';
import { useDispatch } from 'react-redux';

import * as actionTypes from '../../redux/actions/actionTypes';

import ChatHeader from './ChatHeader';
import ChatInputBar from './ChatInputBar';
import ChatItem from './ChatItem';

const {height} = Dimensions.get('window');

interface ChatViewProps {
    user: any
}

const ChatView:FC<ChatViewProps> = ({user}):JSX.Element => {
    const [newHeight, setHeight] = useState(height - 135)
    const dispatch = useDispatch();
    const [text, setText] = useState<any>();
    const [chats, setChats] = useState([
        {id: 0, sender: 'Anna_kendrick', message: "Hello there I'm " + user +  ", I think we've met somewhere in school" },
        {id: 1, sender: 'maria', message: "I don't think I remember seeing you. Mind sending me another of your pic?" },
    ]);

    const goBack = () => {
        dispatch({type: actionTypes.OPEN_CHAT, value: null });
        return true
    }

    BackHandler.addEventListener('hardwareBackPress', goBack );

    useEffect(() => {
        let keyboardDidShowListener: EmitterSubscription;

        keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", keyboardDidShow);

        return () => {
            if (keyboardDidShowListener) {
                keyboardDidShowListener.remove();
                setHeight(height - 135)
            }
        };
    }, []);

    const keyboardDidShow = (e: any) => {
        setHeight(e.endCoordinates.height);
        
    }

    return(
        <View style={[styles.container]}>
            <ChatHeader username={user} active back={goBack} />
            <View style={[styles.chatSection, {height: newHeight}]}>
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
        width: '100%',
        backgroundColor: '#fff'
    },
    chatSection: {
        height: height - 135,
        backgroundColor: 'red'
    }
});

export default ChatView;