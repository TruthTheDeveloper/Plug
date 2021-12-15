import React, {useState} from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

//components
import {Header} from '../../components/index';
import ChatItem from './components/ChatItems';

import * as actionTypes from '../../redux/actions/actionTypes';

import {useDispatch} from 'react-redux';

const {height} = Dimensions.get('window');

const girl = require('../../assets/images/girl1.jpg');
const gir2 = require('../../assets/images/girl2.jpg');

const ChatScreenView  = () => {
    const [users, setUsers] = useState([
        {username: 'Mina_Okabe', active: true, lastText: 'Hello there, wanna hangout today?', image: girl },
        {username: 'krisetin', active: true, lastText: "I'm currently working on an app ", image: gir2 },
    ]);

    const dispatch = useDispatch();

    const openChat = (e:string) => {
        dispatch({type: actionTypes.OPEN_CHAT, value: e});
        console.log(e)
    }

    return(
        <View style={styles.container}>
            <Header label='Chats' />
            <FlatList 
                data={users}
                keyExtractor={user => user.username}
                renderItem={({item}) => <ChatItem 
                        username={item.username} 
                        active={item.active} 
                        image={item.image} 
                        lastText={item.lastText} 
                        openChat={openChat}
                        /> }
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: height,
        backgroundColor: '#fff'
    }
})

export default ChatScreenView;