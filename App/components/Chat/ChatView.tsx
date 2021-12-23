/* eslint-disable prettier/prettier */
import React, {useState, FC} from 'react';
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

const {height} = Dimensions.get('window');

interface ChatViewProps {
  user: any;
}

const ChatView: FC<ChatViewProps> = ({user}): JSX.Element => {
    const senderId = useSelector((state:any) => state.profileReducer.profileId);
    const username = useSelector((state:any) => state.authReducer.username);
    const dispatch = useDispatch();
    const [text, setText] = useState<any>();
    const [chats] = useState([
        {
            receiverId:user.userId,
            receiverName: user.username,
            message:'Hello there I am ' + username + ", I think we've met somewhere in school",
            senderId:senderId,
            senderName:username,
        },
        {
            id: 1,
            sender: 'maria',
            senderId: 3,
            message:
                'hi i am ' +  user.username + "I don't think I remember seeing you. Mind sending me another of your pic? " ,
            },
    ]);

    const goBack = () => {
        dispatch({type: actionTypes.OPEN_CHAT, value: null});
        return true;
    };

    BackHandler.addEventListener('hardwareBackPress', goBack);

  return (
    <View style={styles.container}>
      <ChatHeader username={user.username} active back={goBack} />
      <View style={styles.chatSection}>
        <FlatList
          data={chats}
          keyExtractor={item => item.senderId}
          renderItem={({item}) => (
            <ChatItem id={item.senderId} message={item.message} />
          )}
        />
      </View>
      <ChatInputBar text={text} setText={(e: string) => setText(e)} />
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
