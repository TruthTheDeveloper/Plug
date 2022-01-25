/* eslint-disable prettier/prettier */
import React, {FC} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';
import {Username} from '../../../components';

const {width} = Dimensions.get('window');

interface ChatProps {
  username: string;
  time:any;
  isRead:boolean;
  // active: boolean;
  online:boolean;
  lastText: string;
  image: any;
  openChat: (e: string) => void;
}

const ChatItem: FC<ChatProps> = ({
  username,
  time,
  isRead,
  // active,
  lastText,
  online,
  image,
  openChat,
}): JSX.Element => {
  console.log(isRead, 'chatitem')
  let newText = lastText;
  let seen = isRead;
  if (lastText.length > 20) {
    newText = lastText.substring(0, 20) + '...';
  }
  console.log(image, 'img');

  const openChatHandler = (e:string) => {
    if (isRead === false){
      seen = false;
    } else {
      seen = true;
    }
    openChat(e);
  };
  return (
    <TouchableHighlight
      underlayColor={'#e4e4e4'}
      onPress={() => openChatHandler(username)}>
      <View style={styles.container}>
        <View style={styles.UserImage}>
          <ImageBackground source={{uri:image}} style={styles.image} />
        </View>
        <View style={styles.container2}>
          <View style={styles.gridChatItemHeader}>
            <Username username={username}  fontSize={17} active={true} />
            {online && <Text style={styles.onlineText}>~Online~</Text>}
          </View>
          <Text style={styles.text}>{newText}</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>{time}</Text>
          {isRead === false && <Text>new Message</Text>}
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: width - 30,
    marginLeft: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: '#d4d4d4',
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'row',
  },
  UserImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: '#f0f0f0',
    overflow: 'hidden',
  },
  gridChatItemHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  onlineText: {
    fontSize: 16,
    color: 'green',
    paddingLeft: 5,
  },
  container2: {
    height: 60,
    width: width - 150,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  text: {
    color: '#4d4d4d',
    fontSize: 17,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  dateContainer: {
    height: '100%',
    width: 50,
    justifyContent: 'flex-end',
  },
  date: {
    fontSize: 14,
    paddingBottom: 8,
    color: '#000',
    opacity: 0.5,
  },
});

export default ChatItem;
