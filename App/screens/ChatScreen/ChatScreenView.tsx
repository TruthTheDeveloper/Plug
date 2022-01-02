/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import { getAllMessage } from '../../redux/actions/message';

//components
import {Header} from '../../components/index';
import ChatItem from './components/ChatItems';

import * as actionTypes from '../../redux/actions/actionTypes';
import {useSelector} from 'react-redux';

import {useDispatch} from 'react-redux';

const {height} = Dimensions.get('window');

const girl = require('../../assets/images/girl1.jpg');
const gir2 = require('../../assets/images/girl2.jpg');

const ChatScreenView = () => {
  const dispatch = useDispatch();
  const [] = useState([
    {
      username: 'Mina_Okabe',
      active: true,
      lastText: 'Hello there, wanna hangout today?',
      image: girl,
    },
    {
      username: 'krisetin',
      active: true,
      lastText: "I'm currently working on an app ",
      image: gir2,
    },
  ]);

  

  const updatedContactData = useSelector((state:any) => state.profileReducer.chatContactData);
  console.log(updatedContactData, 'updated');

  const openChat = (username: string, receiverId:any, image:any) => {
    dispatch({type: actionTypes.OPEN_CHAT, value: {username, receiverId, image}});
    dispatch({type: actionTypes.SET_DEFAULT_ROUTE, value: 'CHATS'});
    // console.log(e)
  };

  useEffect(() => {
    dispatch(getAllMessage());
  },[dispatch]);

  return (
    <View style={styles.container}>
      <Header label="Chats" />
      <FlatList
        data={updatedContactData}
        keyExtractor={user => user.receiverId}
        renderItem={({item}) => (
          <ChatItem
            username={item.receiverUsername}
            time={item.time}
            online={item.online}
            // active={item.active}
            image={item.receiverImage}
            lastText={item.lastmessage}
            openChat={() => openChat(item.receiverUsername, item.receiverId, item.receiverImage)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height,
    backgroundColor: '#fff',
  },
});

export default ChatScreenView;
