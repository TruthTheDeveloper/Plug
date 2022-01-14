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
  console.log(updatedContactData)
  console.log(previousConverstion)
  // console.log(updatedContactData, 'contact sata');

  const socketId = profileIdData.socketId;
  // const updatechatContact : any = useRef()

  // console.log(previousConverstion, 'prev')

  useEffect(() => {
      dispatch(getMessage(user.receiverId, socketId));

  },[dispatch,  socketId, user.receiverId]);

  useEffect(() => {

    // dispatch(getMessage(user.receiverId, socketId));
    newSocket = io('https://findplug.herokuapp.com',{query:{id:socketId}});
    console.log('useEffect called');
    newSocket.on('connect', () => {

        setOnline(true);
      console.log('you are connected from chat view');
      newSocket.emit('chat', 'can we chat');

      if (updatedContactData.length === 0 && previousConverstion.length >= 1){
        console.log('was here')
        const convResult = [];
        const lastIndex = previousConverstion.length - 1;
        const prevConv = previousConverstion[lastIndex];
        convResult.push(prevConv);
        console.log(convResult);
        dispatch({
          type: actionTypes.CHAT_CONTACT,
          chatContactData: convResult,
        });
      }

      newSocket.on('receive', (Sid: string, senderUsername:string, senderImage:string,  Rid:string, receiverUsername:string, receiverImage:string, message:string, onlin:boolean, time:any, isRead:boolean) => {
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
          online:onlin,
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
          (e: {receiverId: string}) => e.receiverId !== data.receiverId,
        );
        updatechatContact.unshift(data);
        dispatch({
          type: actionTypes.CHAT_CONTACT,
          chatContactData: updatechatContact,
        });
      });

      // console.log(newSocket)
    });


    // setOnline(false);
    // return () => newSocket.close();[klP]

    return () => {
      newSocket.off('receive');
      newSocket.disconnect();
    };


  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, online, socketId, updatedContactData, user.image, user.receiverId, user.username]);

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
    newSocket.on('connect', newSocket.emit('send', Sid, profileIdData.username, profileIdData.profilePic, Rid, user.username, user.image, msg, online, new Date().toLocaleTimeString().slice(0,5), true));
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
      isRead:true,

    };

    dispatch({
      type: actionTypes.ADD_NEW_MESSAGE,
      conversation: data,
    });
    // setChats((prev: any) => [...prev, data]);

    const updatechatContact = updatedContactData.filter(
      (e: {senderId: string}) => e.senderId !== data.senderId,
    );
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

  return (
    <View style={styles.container}>
      <ChatHeader username={user.username} online={online} active back={goBack} />
      <View style={[styles.chatSection, {height: newHeight}]}>
        {previousConverstion.length !== 0 ? (
          <FlatList
            data={previousConverstion}
            // keyExtractor={item => item._id}
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
