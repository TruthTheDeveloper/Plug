/* eslint-disable prettier/prettier */
import React, {useState, FC, useEffect, useCallback} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  BackHandler,
  Keyboard,
  EmitterSubscription,
  Text,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {launchImageLibrary} from 'react-native-image-picker';

import * as actionTypes from '../../redux/actions/actionTypes';
import { getMessage } from '../../redux/actions/message';

import ChatHeader from './ChatHeader';
import ChatInputBar from './ChatInputBar';
import ChatItem from './ChatItem';
import {useSelector} from 'react-redux';
import io from 'socket.io-client';
import uuid from 'react-native-uuid';
import PushNotification, {Importance} from 'react-native-push-notification';
import { useIsConnected } from 'react-native-offline';
import { string } from 'prop-types';

const {height} = Dimensions.get('window');

interface ChatViewProps {
  user: any;
}


let newSocket : any;
// let updatechatContact :any;
const ChatView: FC<ChatViewProps> = ({user}): JSX.Element => {
const isConnected = useIsConnected();
const [newHeight, setHeight] = useState(height - 165);
const online = useSelector((state:any) => state.chatReducer.isOnline);
const dispatch = useDispatch();
const [on, setOn] :any = useState();

// const [socketId, setSocketId] : any = useState()
// const profileIdDa= useSelector((state:any) => state.profileReducer.profileIdData);
const profileIdData = useSelector(
  (state: any) => state.profileReducer.profileIdData,
);
const updatedContactData = useSelector(
  (state: any) => state.profileReducer.chatContactData,
);

// console.log(updatedContactData, 'updated')

const previousConverstion = useSelector((state:any) => state.messageReducer.conversation);

const socketId = profileIdData.socketId;
const isRead = useSelector((state:any) => state.chatReducer.isRead);

const offlineMessage = [];
// const updatechatContact : any = useRef()
// console.log(isRead, 'from chatView');
// console.log(updatedContactData, 'update contact data');

// console.log(previousConverstion, 'prev')

useEffect(() => {
    dispatch(getMessage(user.receiverId, socketId));

},[dispatch,  socketId, user.receiverId]);

useEffect(() => {
  newSocket = io('https://findplug.herokuapp.com',{query:{id:socketId}});
  console.log('useEffect called');
  newSocket.on('connect', () => {

    console.log(user.receiverId, 'kkkksshss');

    console.log('you are connected from chat view');
    newSocket.emit('chat', 'can we chat');

    dispatch({
      type: actionTypes.RECEIVERID,
      receiverId: user.receiverId,
    });

    // console.log(updatedContactData.length);


    if (previousConverstion.length >= 1){
      // console.log('was here');
      const lastIndex = previousConverstion.length - 1;
      const prevConv = previousConverstion[lastIndex];
      // console.log(prevConv, 'last index');

      console.log(socketId, prevConv.receiverId, 'id---kdkd');
      if (socketId === prevConv.receiverId){
        console.log('is read now');
        prevConv.isRead = true;
        if (online === true){
          // console.log(online, 'on');
          prevConv.online = true;
        } else {
          prevConv.online = false;
        }
        // console.log(prevConv, 'conv');
        // console.log(updatedContactData, 'ison---');
        // const updatechatContact = updatedContactData.filter(
        //   (e: { messageId: any; }) =>{
        //     e.messageId !== prevConv.messageId;

        //     console.log();
        //   });
        updatedContactData.shift();
        updatedContactData.unshift(prevConv);
        // console.log(updatechatContact, 'up');
        // dispatch({
        //   type: actionTypes.CHAT_CONTACT,
        //   chatContactData: updatechatContact,
        // });
      }
    }

    console.log(newSocket);
  });

newSocket.on('online', (users:any) => {
  // console.log(users, 'emmitted');
  // console.log(socketId, ' my id');
  // console.log(users.receiverId, ' ', user);
  for (const i in users){
    // console.log(users[i], 'users---');
    // console.log(user.receiverId, 'receiverid');
    if (users[i] === user.receiverId){
      // console.log('online');
      setOn(true);
      dispatch({
        type: actionTypes.ISONLINE,
        isOnline:true,
      });

      break;

    } else {
      // console.log('not online');
      setOn(false);
      dispatch({
        type: actionTypes.ISONLINE,
        isOnline:false,
      });
    }
  }
});

// newSocket.on('offlineMessage', (messageId:string, Sid: string, senderUsername:string, senderImage:string,  Rid:string, receiverUsername:string, receiverImage:string, message:string, time:any) => {
//   console.log('messssgeoffline');
// })

newSocket.on('receiveMessage', (messageData:object) => {
  // console.log('incoming message', message, Rid, Sid);
  // if (updatedContactData.length !== 0 && Sid !== updatedContactData[0].senderId){
  //   updatedContactData.shift();
  // }
  dispatch(getMessage(user.receiverId, socketId));
  console.log('view get get');
  dispatch({
    type: actionTypes.ADD_NEW_MESSAGE,
    conversation: messageData,
  });
  // setChats((prev: any) => [...prev, data]);

  console.log(messageData);

  if (messageData.receiver.receiverSocketId === user.receiverId){
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
    title: `New Message from ${data.receiverUsername === profileIdData.username ? data.senderUsername : data.receiverUsername}`, // (optional)
    message: data.message,
    picture: data.receiverUsername === profileIdData.username ? data.senderImage : data.receiverImage,
  });
  }

  const updatechatContact = updatedContactData.filter(
    (e: {receiverId: string, senderId:string}) =>
      e.senderId !== data.senderId
  );
  updatechatContact.unshift(data);
  dispatch({
    type: actionTypes.CHAT_CONTACT,
    chatContactData: updatechatContact,
  });
});


// setOnline(false);
// return () => newSocket.close();[klP]

return () => {
  newSocket.off('receive');
  newSocket.disconnect();



  dispatch({
    type: actionTypes.RECEIVERID,
    receiverId: user.receiverId,
  });

};


// eslint-disable-next-line react-hooks/exhaustive-deps
}, [dispatch, socketId, previousConverstion, user.image, user.receiverId, user.username]);

// useEffect(() => {
//   console.log('did comon mount');
//   setChats([]);
//   console.log(user.receiverId, socketId);
//   dispatch(getMessage(user.receiverId, socketId));
//   setChats((prev:any) => [...previousConverstion, ...prev]);
// },[dispatch, socketId, user.receiverId]);

// console.log(chats, 'chats')







const sendMessage = (msg: any, Rid: string, Sid: string) => {
console.log(isConnected, 'isConnected');
// console.log(Sid, 'Sid');

const messageId = uuid.v4();
console.log(updatedContactData, 'update contact data');
// console.log(Rid , updatedContactData[0].receiverId, user.receiverId, socketId,  'sksslsllslslsls')
// if (updatedContactData.length !== 0 && Rid ===  updatedContactData[0].receiverId){
//   updatedContactData.shift();
// }
// if (){
//   console.log('shifted')

// }
// console.log(messageId, 'messageId');
  console.log('emitted');
// if (isConnected){
  console.log('your now connected');
  // newSocket.emit('sendMessage', messageId, Sid, profileIdData.username, profileIdData.profilePic, Rid, user.username, user.image, msg, new Date().toLocaleTimeString().slice(0,5));

  const messageData = {
    sender:{
      senderSocketId:Sid,
      username:profileIdData.username,
      image:profileIdData.profilePic,
    },
    receiver:{
      receiverSocketId:Rid,
      username:user.username,
      image:user.image,
    },
    message:{
      msg:msg,
    },
    time:new Date().toLocaleTimeString().slice(0,5),
  };

  newSocket.emit('sendMessage', messageData);
// } else {
  // console.log('not connected')
  // offlineMessage.push({messageId, Sid, username:profileIdData.username, userPic:profileIdData.profilePic, Rid:Rid, ReciverUsername:user.username, userImage:user.image, msg:msg, date:new Date().toLocaleTimeString().slice(0,5)});
  let data = {
    // messageId:messageId,
    senderId: messageData.sender.senderSocketId,
    senderUsername:messageData.sender.username,
    senderImage:messageData.sender.image,
    receiverId:messageData.receiver.receiverSocketId,
    receiverUsername:messageData.receiver.username,
    receiverImage:messageData.receiver.image,
    message:messageData.message.msg,
    time:messageData.time,
    online:on,
    isRead:isRead,
  };

// newSocket.emit('send', messageId, Sid, profileIdData.username, profileIdData.profilePic, Rid, user.username, user.image, msg, new Date().toLocaleTimeString().slice(0,5), true);

  dispatch({
    type: actionTypes.ADD_NEW_MESSAGE,
    conversation: data,
  });
// setChats((prev: any) => [...prev, data]);

  const updatechatContact = updatedContactData.filter(
    (e: {receiverId: string}) => e.receiverId !== data.receiverId);
  console.log(updatechatContact, '[chat contact]');
  updatechatContact.unshift(data);


  dispatch({
    type: actionTypes.CHAT_CONTACT,
    chatContactData: updatechatContact,
  });
  };

// const senderId = useSelector((state:any) => state.profileReducer.profileId);
// console.log(senderId, user, user.username);
const [text, setText] = useState<any>();
// 'Hello there i am' + username + ", I think we've met somewhere in school"

const goBack = () => {
  dispatch({type: actionTypes.OPEN_CHAT, value: null});
return true;
};

BackHandler.addEventListener('hardwareBackPress', goBack);

useEffect(() => {
let keyboardDidShowListener: EmitterSubscription;
let keyboardDidHideListener: EmitterSubscription;

keyboardDidShowListener = Keyboard.addListener(
  'keyboardDidShow',
  keyboardDidShow,
);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
keyboardDidHideListener = Keyboard.addListener(
  'keyboardDidHide',
  keyboardDidHide,
);

return () => {
  if (keyboardDidShowListener) {
    keyboardDidShowListener.remove();
  }
};
}, []);

const keyboardDidShow = (e: any) => {
setHeight(e.endCoordinates.height - 45);
};

const keyboardDidHide = () => {
setHeight(height - 165);
};

const openGallery = () => {
launchImageLibrary({mediaType: 'photo'}, response => {
  if (response.assets) {
    const data = response.assets[0].uri;
    console.log();
    sendMessage(data, user.receiverId, socketId);
    // dispatch({type: actionTypes.SET_PROFILE_PIC, profilePic: data});
  }
});
};

const submitMessageHandler = useCallback((msg: any) => {
// console.log(msg, user.receiverId, 'reci');
// console.log(socketId, msg, user.receiverId);
console.log('we ur');
sendMessage(msg, user.receiverId, socketId);
setText('');
},[isConnected]);

let FlatListRef: FlatList<any> | null = null;

  return (
    <View style={styles.container}>
      <ChatHeader username={user.username} online={on} active back={goBack} />
      <View style={[styles.chatSection, {height: newHeight}]}>
        {previousConverstion.length !== 0 ? (
          <FlatList
            data={previousConverstion}
            // keyExtractor={item => item._id}
            ref={ref => (FlatListRef = ref)}
            onContentSizeChange={() => FlatListRef?.scrollToEnd()}
            initialNumToRender={1000}
            renderItem={({item}) => (
              <ChatItem
                id={item.senderId}
                rec={user.receiverId}
                message={item.message}
                receiverId={item.receiverId}
                socket={socketId}
              />
            )}
          />
        ) : <Text>Loading....</Text>}
      </View>
      <ChatInputBar
        text={text}
        setText={(e: string) => setText(e)}
        openGallery={openGallery}
        send={(msg: string) => submitMessageHandler(msg)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
  },
  chatSection: {
    height: height - 165,
    backgroundColor: '#fff',
  },
});

export default ChatView;
