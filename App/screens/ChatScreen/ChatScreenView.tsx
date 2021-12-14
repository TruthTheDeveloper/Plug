import React, {useState} from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

//components
import {Header} from '../../components/index';
import ChatItem from './components/ChatItems';

const {height} = Dimensions.get('window');

const girl = require('../../assets/images/girl1.jpg');
const gir2 = require('../../assets/images/girl2.jpg');

const ChatScreenView  = () => {
    const [users, setUsers] = useState([
        {username: 'Mina_Okabe', active: true, level: '400l', department: 'Computer Science', image: girl },
        {username: 'krisetin', active: true, level: '100l', department: 'law', image: gir2 },
    ]);

    return(
        <View style={styles.container}>
            <Header label='Chats' />
            <ChatItem />
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