/* eslint-disable prettier/prettier */
import React, {useState, useEffect, useRef} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

//components
import {Header} from '../../components/index';
import ChatItem from './components/ChatItems';

import AsyncStorage from '@react-native-async-storage/async-storage';


import * as actionTypes from '../../redux/actions/actionTypes';
import {useSelector} from 'react-redux';

import {useDispatch} from 'react-redux';
import io from 'socket.io-client';

const {height} = Dimensions.get('window');


const girl = require('../../assets/images/girl1.jpg');
const gir2 = require('../../assets/images/girl2.jpg');


let newSocket : any;
const ChatScreenView = () => {
  const dispatch = useDispatch();
  const messageCount = useRef(0)
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




  let updatedContactData = useSelector((state:any) => state.profileReducer.chatContactData);
  console.log(updatedContactData, 'updated');



  const openChat = (username: string, receiverId:any, image:any) => {
    dispatch({type: actionTypes.OPEN_CHAT, value: {username, receiverId, image}});
    dispatch({type: actionTypes.SET_DEFAULT_ROUTE, value: 'CHATS'});
    // console.log(e)
  };
  const profileIdData = useSelector(
    (state: any) => state.profileReducer.profileIdData,
  );

  const socketId = profileIdData.socketId;


  useEffect(() => {
    // dispatch(getMessage(user.receiverId, socketId));
    newSocket = io('https://findplug.herokuapp.com',{query:{id:socketId}});
    console.log('useEffect called');
    newSocket.on('connect', () => {

    console.log('connected from chatscreenview');
    newSocket.emit('chat', 'can we chat');

    newSocket.on('receive', (Sid: string, senderUsername:string, senderImage:string,  Rid:string, receiverUsername:string, receiverImage:string, message:string, onlin:boolean, time:any, isRead:boolean)  => {
      messageCount.current = messageCount.current + 1;
      console.log('viewscreen get get')
      console.log('incoming message', message, Rid, Sid,);
      const chatViewData = {
        senderId: Sid,
        senderUsername:senderUsername,
        senderImage:senderImage,
        receiverId:Rid,
        receiverUsername:receiverUsername,
        receiverImage:receiverImage,
        message:message,
        online:onlin,
        time:time,
        isRead:isRead,

      };

      const updatechatContact = updatedContactData.filter(
        (e: {receiverId: string}) => e.receiverId !== chatViewData.receiverId && e.receiverId !== chatViewData.senderId);

      updatechatContact.unshift(chatViewData);


      dispatch({
        type: actionTypes.CHAT_CONTACT,
        chatContactData:updatechatContact,
      });

    });

    });


    return () => {
      newSocket.off('receive');
      newSocket.disconnect();
    }


  },[dispatch, socketId, updatedContactData]);

  useEffect(() => {

    if (updatedContactData.length === 0){
      console.log('sksksk');
      AsyncStorage.getItem('updatedContactData').then((result) => {
        console.log(result, 'jjdd');
        // eslint-disable-next-line react-hooks/exhaustive-deps
        updatedContactData = result !== null ? JSON.parse(result) : null;
        console.log(updatedContactData, 'help')

        dispatch({
          type: actionTypes.CHAT_CONTACT,
          chatContactData:updatedContactData,
        });
      });
    } else if (updatedContactData.length >= 1){
      AsyncStorage.setItem('updatedContactData',JSON.stringify(updatedContactData));
    }
  },[]);

  return (
    <View style={styles.container}>
      <Header label="Chats" />
      {updatedContactData.length >= 1 ?
      <FlatList
      data={updatedContactData}
      keyExtractor={user => user.receiverId}
      renderItem={({item}) => (
        <ChatItem
          username={item.receiverUsername === profileIdData.username ? item.senderUsername : item.receiverUsername}
          time={item.time}
          online={item.online}
          // active={item.active}
          image={item.receiverUsername === profileIdData.username ? item.senderImage : item.receiverImage}
          lastText={item.message}
          openChat={() => openChat(item.receiverUsername === profileIdData.username ? item.senderUsername : item.receiverUsername, item.receiverId === profileIdData.socketId ? item.senderId : item.receiverId , item.receiverUsername === profileIdData.username ? item.senderImage : item.receiverImage)}
        />
      )}
    /> : null}
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
