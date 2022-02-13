/* eslint-disable prettier/prettier */
import React, {useEffect, useRef} from 'react';
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
import PushNotification, {Importance} from 'react-native-push-notification';

const {height} = Dimensions.get('window');



let newSocket : any;
const ChatScreenView = () => {
  const dispatch = useDispatch();
  const messageCount = useRef(0);




  let updatedContactData = useSelector((state:any) => state.profileReducer.chatContactData);
  console.log(updatedContactData, 'updated');
  const isRead = useSelector((state:any) => state.chatReducer.isRead);
  const receiverIdentity = useSelector((state:any) => state.chatReducer.receiverId);
  const online = useSelector((state:any) => state.chatReducer.isOnline);



  const openChat = (username: string, receiverId:any, image:any) => {
    dispatch({type: actionTypes.OPEN_CHAT, value: {username, receiverId, image}});
    dispatch({type: actionTypes.SET_DEFAULT_ROUTE, value: 'CHATS'});
    // console.log(e)
  };
  const profileIdData = useSelector(
    (state: any) => state.profileReducer.profileIdData,
  );

  const socketId = profileIdData.socketId;

  // console.log(isRead, 'from chatScreenView');
  useEffect(() => {
    // dispatch({
    //   type: actionTypes.ISONLINE,
    //   isOnline:false,
    // });
      // dispatch(getMessage(el.receiverId, el.senderId))
    // console.log(isRead, 'from chatScreenView')
    // dispatch(getMessage(user.receiverId, socketId));
    newSocket = io('https://findplug.herokuapp.com',{query:{id:socketId}});
    console.log('useEffect called');
    newSocket.on('connect', () => {

    console.log('connected from chatscreenview');
    newSocket.emit('chat', 'can we chat');

    newSocket.on('online', (users:any) => {
      for (const i in users){
        if (users[i] === receiverIdentity){
          console.log('online');
          dispatch({
            type: actionTypes.ISONLINE,
            isOnline:true,
          });

          break;

        } else {
          console.log('not online')
          dispatch({
            type: actionTypes.ISONLINE,
            isOnline:false,
          });
        }
      }
    });


    newSocket.on('receiveMessage', (messageId:string, Sid: string, senderUsername:string, senderImage:string,  Rid:string, receiverUsername:string, receiverImage:string, message:string, time:any)  => {
      messageCount.current = messageCount.current + 1;
      console.log('viewscreen get get');
      dispatch({
        type:actionTypes.ISREAD,
        isRead:false,
      });


      console.log('incoming message', message, Rid, Sid,);
      const chatViewData = {
        messageId:messageId,
        senderId: Sid,
        senderUsername:senderUsername,
        senderImage:senderImage,
        receiverId:Rid,
        receiverUsername:receiverUsername,
        receiverImage:receiverImage,
        message:message,
        online:online,
        time:time,
        isRead:false,

      };


        PushNotification.createChannel(
          {
            channelId: 'channel-id', // (required)
            channelName: 'My channel', // (required)
            channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
            playSound: false, // (optional) default: true
            soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
            importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
            vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
          },
          (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
        );

      PushNotification.localNotification({
        channelId:'channel-id',
        title: `New Message from ${chatViewData.receiverUsername === profileIdData.username ? chatViewData.senderUsername : chatViewData.receiverUsername}`, // (optional)
        message: chatViewData.message,
        picture: chatViewData.receiverUsername === profileIdData.username ? chatViewData.senderImage : chatViewData.receiverImage,
      });



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
      // newSocket.emit('offline', receiverIdentity, socketId);
    };


  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[dispatch, socketId]);

  useEffect(() => {

    if (Array.isArray(updatedContactData)){
      console.log('sksksk');
      if (updatedContactData.length === 0){
        AsyncStorage.getItem('updatedContactData').then((result) => {
          // console.log(result, 'jjdd');
          // eslint-disable-next-line react-hooks/exhaustive-deps
          updatedContactData = result !== null ? JSON.parse(result) : null;
          // console.log(updatedContactData, 'help');
          if (updatedContactData !== null){
            dispatch({
              type: actionTypes.CHAT_CONTACT,
              chatContactData:updatedContactData,
            });
          }
        });
      }
    } else if (updatedContactData !== null){
      if (updatedContactData >= 1){
        AsyncStorage.setItem('updatedContactData',JSON.stringify(updatedContactData));
      }
    }
  },[]);

  return (
    <View style={styles.container}>
      <Header label="Chats" />
      <FlatList
      data={updatedContactData}
      keyExtractor={user => user.receiverId}
      renderItem={({item}) => (
        <ChatItem
          username={item.receiverUsername === profileIdData.username ? item.senderUsername : item.receiverUsername}
          time={item.time}
          online={item.online}
          isRead={item.isRead}
          // active={item.active}
          image={item.receiverUsername === profileIdData.username ? item.senderImage : item.receiverImage}
          lastText={item.message}
          openChat={() => openChat(item.receiverUsername === profileIdData.username ? item.senderUsername : item.receiverUsername, item.receiverId === profileIdData.socketId ? item.senderId : item.receiverId , item.receiverUsername === profileIdData.username ? item.senderImage : item.receiverImage)}
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
