/* eslint-disable prettier/prettier */
import React, {useState, FC, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  BackHandler,
} from 'react-native';
import {useDispatch} from 'react-redux';

import * as actionTypes from '../../redux/actions/actionTypes';

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
  // const [socketId, setSocketId] : any = useState()
  // const profileIdDa= useSelector((state:any) => state.profileReducer.profileIdData);
  const [chats, setChats] : any = useState([
  ]);
  const profileIdData = useSelector((state:any) => state.profileReducer.profileIdData);
  const socketId = profileIdData.socketId;
    useEffect(() => {
      console.log('useEffect called');
         newSocket  = io('https://findplug.herokuapp.com', { query : {id:user.receiverId}});
         newSocket.on('connect', () => {
             console.log('you are now connected');
         });
         newSocket.on('receive-message', (msg:string, Sid:string, Rid:string) => {
          let data = {
            senderId:Sid,
            receiverId:Rid,
            message:msg,
          };
          setChats((prev: any) => [...prev, data]);
         });
         return () => newSocket.close();
    },[chats, user.receiverId]);

    const sendMessage = (msg: string, Rid: string, Sid:string) => {
        newSocket.emit('send-message', msg, Rid, Sid);
        let data = {
          senderId:Sid,
          receiverId:Rid,
          message:msg,
        };
        setChats((prev: any) => [...prev, data]);

    };

    // const senderId = useSelector((state:any) => state.profileReducer.profileId);
    // console.log(senderId, user, user.username);
    const dispatch = useDispatch();
    const [text, setText] = useState<any>();
    // 'Hello there i am' + username + ", I think we've met somewhere in school"

    const goBack = () => {
        dispatch({type: actionTypes.OPEN_CHAT, value: null});
        return true;
    };

    const submitMessageHandler = (msg:string) => {
        console.log(msg, user.receiverId);
        sendMessage(msg, user.receiverId, socketId);
        setText('');

    };

    BackHandler.addEventListener('hardwareBackPress', goBack);

  return (
    <View style={styles.container}>
      <ChatHeader username={user.username} active back={goBack} />
      <View style={styles.chatSection}>
        {chats.length !== 0 ?
        <FlatList
        data={chats}
        keyExtractor={item => item.senderId}
        renderItem={({item}) => (
          <ChatItem id={item.senderId} message={item.message} socket={socketId}/>
        )}
      /> : null}
      </View>
      <ChatInputBar text={text} setText={(e: string) => setText(e)}  send={(msg:string) => submitMessageHandler(msg)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height,
    width: '100%',
    backgroundColor: '#fff',
  },
  chatSection: {
    height: height - 135,
    backgroundColor: '#FFF',
  },
});

export default ChatView;
