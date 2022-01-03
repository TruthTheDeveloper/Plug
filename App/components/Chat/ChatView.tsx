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
const ChatView: FC<ChatViewProps> = ({user}): JSX.Element => {
  const [newHeight, setHeight] = useState(height - 165);
  const [online, setOnline] = useState(false);
  const dispatch = useDispatch();
  // const [socketId, setSocketId] : any = useState()
  // const profileIdDa= useSelector((state:any) => state.profileReducer.profileIdData);
  const [chats, setChats]: any = useState([]);
  const profileIdData = useSelector(
    (state: any) => state.profileReducer.profileIdData,
  );
  const updatedContactData = useSelector(
    (state: any) => state.profileReducer.chatContactData,
  );

  const previousConverstion = useSelector((state:any) => state.messageReducer.conversation);
  // console.log(previousConverstion, 'conversation')
  // console.log(updatedContactData, 'contact sata');

  const socketId = profileIdData.socketId;

  // console.log(previousConverstion, 'prev')
  

  useEffect(() => {
    // dispatch(getMessage(user.receiverId, socketId));
    newSocket = io('https://findplug.herokuapp.com',{query:{id:socketId}});
    console.log('useEffect called');
    let timer : any = null;
    newSocket.on('connect', () => {

      timer = setTimeout(() => {
        setOnline(true);
      },30000);
      console.log('you are now connected');
      newSocket.emit('chat', 'can we chat');

      newSocket.on('receive', (msg: any, Rid:any, Sid:any) => {
        console.log('incoming message', msg, Rid, Sid);
        let data = {
          senderMessage: Sid,
          receiverMessage: Rid,
          message: msg,
        };
        console.log(data);
        setChats((prev: any) => [...prev, data]);

        const chatViewData = {
          receiverId: Rid,
          receiverUsername: user.username,
          lastmessage: msg,
          receiverImage: user.image,
          online:online,
          time: new Date().toLocaleTimeString().slice(0,5),
        };

        console.log(chatViewData)

        const updatechatContact = updatedContactData.filter(
          (e: {receiverId: string}) => e.receiverId !== chatViewData.receiverId,
        );
        updatechatContact.unshift(chatViewData);
        dispatch({
          type: actionTypes.CHAT_CONTACT,
          chatContactData: updatechatContact,
        });
      });

      // console.log(newSocket)
    });

    setOnline(false);
    // return () => newSocket.close();

    return () => {
      newSocket.off('receive');
      if (timer !== null){
        clearTimeout(timer);
        setOnline(false);
      }
      newSocket.close();
    };


  }, [dispatch, online, socketId, updatedContactData, user.image, user.receiverId, user.username]);

  useEffect(() => {
    console.log('did comon mount');
    setChats([]);
    console.log(user.receiverId, socketId);
    dispatch(getMessage(user.receiverId, socketId));
    setChats((prev:any) => [...previousConverstion, ...prev]);
  },[dispatch, previousConverstion, socketId, user.receiverId]);

  // console.log(chats, 'chats')




  const sendMessage = (msg: any, Rid: string, Sid: string) => {
    console.log('emitted');
    newSocket.emit('send', msg, Rid, Sid);
    dispatch(getMessage(user.receiverId, socketId));
    let data = {
      senderMessage: Sid,
      receiverMessage: Rid,
      message: msg,
    };
    setChats((prev: any) => [...prev, data]);
    const chatViewData = {
      receiverId: Rid,
      receiverUsername: user.username,
      lastmessage: msg,
      receiverImage: user.image,
      online:online,
      time: new Date().toLocaleTimeString().slice(0,5),
    };

    const updatechatContact = updatedContactData.filter(
      (e: {receiverId: string}) => e.receiverId !== chatViewData.receiverId,
    );
    updatechatContact.unshift(chatViewData);

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
    // let keyboardDidHideListener: EmitterSubscription;

    keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      keyboardDidShow,
    );
    // keyboardDidHideListener = Keyboard.addListener(
    //   'keyboardDidHide',
    //   keyboardDidHide,
    // );

    return () => {
      if (keyboardDidShowListener) {
        keyboardDidShowListener.remove();
      }
    };
  }, []);

  const keyboardDidShow = (e: any) => {
    setHeight(e.endCoordinates.height - 45);
  };

  // const keyboardDidHide = () => {
  //   setHeight(height - 165);
  // };

  const openGallery = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.assets) {
        const data = response.assets[0].uri;
        console.log(data);
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

  return (
    <View style={styles.container}>
      <ChatHeader username={user.username} online={online} active back={goBack} />
      <View style={[styles.chatSection, {height: newHeight}]}>
        {chats.length !== 0 ? (
          <FlatList
            data={chats}
            // keyExtractor={item => item._id}
            renderItem={({item}) => (
              <ChatItem
                id={item.senderMessage}
                rec={user.receiverId}
                message={item.message}
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
