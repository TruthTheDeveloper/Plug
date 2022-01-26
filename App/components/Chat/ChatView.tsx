/* eslint-disable prettier/prettier */
import React, {useState, FC, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  BackHandler,
  Keyboard,
  EmitterSubscription,
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

const {height} = Dimensions.get('window');

interface ChatViewProps {
  user: any;
}


let newSocket : any;
// let updatechatContact :any;
const ChatView: FC<ChatViewProps> = ({user}): JSX.Element => {
  const [newHeight, setHeight] = useState(height - 165);
  const online = useSelector((state:any) => state.chatReducer.isOnline);
  const dispatch = useDispatch();

  // const [socketId, setSocketId] : any = useState()
  // const profileIdDa= useSelector((state:any) => state.profileReducer.profileIdData);
  const profileIdData = useSelector(
    (state: any) => state.profileReducer.profileIdData,
  );
  const updatedContactData = useSelector(
    (state: any) => state.profileReducer.chatContactData,
  );

  const previousConverstion = useSelector((state:any) => state.messageReducer.conversation);

  const socketId = profileIdData.socketId;
  const isRead = useSelector((state:any) => state.chatReducer.isRead);
  const [on, setOn] = useState(false);
  // const updatechatContact : any = useRef()
  console.log(isRead, 'from chatView');

  // console.log(previousConverstion, 'prev')

  useEffect(() => {
      dispatch(getMessage(user.receiverId, socketId));

      const allConverastion = []
      allConverastion.unshift({receiverId:user.receiverId, senderId:socketId})

      dispatch({type:actionTypes.GET_ALL_CONVERSATION, allConversation:allConverastion})

  },[dispatch,  socketId, user.receiverId]);

  useEffect(() => {
    dispatch({
      type:actionTypes.ISREAD,
      isRead:true,
    });
    // dispatch(getMessage(user.receiverId, socketId));
    newSocket = io('https://findplug.herokuapp.com',{query:{id:socketId}});
    console.log('useEffect called');
    newSocket.on('connect', () => {

      dispatch({
        type:actionTypes.ISREAD,
        isRead:true,
      });

      console.log('you are connected from chat view');
      newSocket.emit('chat', 'can we chat');
      newSocket.emit('isOnline', user.receiverId,socketId);
      newSocket.on('online', (users:any) => {
        console.log(users.receiverId, ' ', user.receiverId);
        for (const i in users){
          if (users[i] === user.receiverId){
            console.log('online');
            dispatch({
              type: actionTypes.ISONLINE,
              isOnline:true,
            });

            setOn(true);
          }
        }
      });

      dispatch({
        type: actionTypes.RECEIVERID,
        receiverId: user.receiverId,
      });

      console.log(updatedContactData.length);


      if (previousConverstion.length >= 1){
        console.log('was here');
        const lastIndex = previousConverstion.length - 1;
        const prevConv = previousConverstion[lastIndex];
        console.log(prevConv, 'last index');
        prevConv.isRead = true;
        if (online === true){
          console.log(online, 'on');
          prevConv.online = true;
        } else {
          prevConv.online = false;
        }
        console.log(updatedContactData)
        const updatechatContact = updatedContactData.filter(
          (e: {receiverId: string, senderId:string}) => {
            console.log('receiver ', e.receiverId, 'receiver data', prevConv.receiverId, 'sender data', prevConv.senderId);
            e.receiverId !== prevConv.receiverId;
          },
        );
        updatechatContact.unshift(prevConv);
        console.log(updatechatContact, 'ison---');
        dispatch({
          type: actionTypes.CHAT_CONTACT,
          chatContactData: updatechatContact,
        });
      }

      // console.log(newSocket)
    });

    newSocket.on('receive', (Sid: string, senderUsername:string, senderImage:string,  Rid:string, receiverUsername:string, receiverImage:string, message:string, time:any) => {
      console.log('incoming message', message, Rid, Sid);
      dispatch(getMessage(user.receiverId, socketId));
      console.log('view get get');
      let data = {
        senderId: Sid,
        senderUsername:senderUsername,
        senderImage:senderImage,
        receiverId:Rid,
        receiverUsername:receiverUsername,
        receiverImage:receiverImage,
        message:message,
        // when i receive a message i assume the sender is online for me to receive the message
        online:true,
        time:time,
        isRead:isRead,

      };
      console.log(data);
      dispatch({
        type: actionTypes.ADD_NEW_MESSAGE,
        conversation: data,
      });
      // setChats((prev: any) => [...prev, data]);

      console.log(data);

      const updatechatContact = updatedContactData.filter(
        (e: {receiverId: string, senderId:string}) => {
          console.log('bad')
          console.log('receiver ', e.receiverId, 'receiver data', data.receiverId, 'sender data', data.senderId);
          e.receiverId !== data.receiverId && e.receiverId !== data.senderId;
        },
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
      newSocket.emit('offline', user.receiverId, socketId);



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
    console.log('emitted');
    console.log('view get');
    newSocket.emit('send', Sid, profileIdData.username, profileIdData.profilePic, Rid, user.username, user.image, msg, new Date().toLocaleTimeString().slice(0,5), true);
    let data = {
      senderId: Sid,
      senderUsername:profileIdData.username,
      senderImage:profileIdData.profilePic,
      receiverId: Rid,
      receiverUsername:user.username,
      receiverImage:user.image,
      message: msg,
      online:online,
      time: new Date().toLocaleTimeString().slice(0,5),
    };

    dispatch({
      type: actionTypes.ADD_NEW_MESSAGE,
      conversation: data,
    });
    // setChats((prev: any) => [...prev, data]);

    const updatechatContact = updatedContactData.filter(
      (e: {receiverId: string}) => e.receiverId !== data.receiverId && e.receiverId !== data.senderId);
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

  const submitMessageHandler = (msg: any) => {
    // console.log(msg, user.receiverId, 'reci');
    console.log(socketId, msg, user.receiverId);
    sendMessage(msg, user.receiverId, socketId);
    setText('');
  };

  let FlatListRef: FlatList<any> | null = null;

  return (
    <View style={styles.container}>
      <ChatHeader username={user.username} online={online} active back={goBack} />
      <View style={[styles.chatSection, {height: newHeight}]}>
        {previousConverstion.length !== 0 ? (
          <FlatList
            data={previousConverstion}
            // keyExtractor={item => item._id}
            ref={ref => (FlatListRef = ref)}
            onContentSizeChange={() => FlatListRef?.scrollToEnd()}
            initialNumToRender={100}
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
        ) : null}
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
