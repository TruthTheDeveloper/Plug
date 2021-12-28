/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {FC} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
// import { useSelector } from 'react-redux';


interface ChatProps {
  id: any;
  message: any;
  socket:any
  rec:any;
}

const ChatItem: FC<ChatProps> = ({id, message, socket, rec}): JSX.Element => {
  let chatDisplay = null;
  let msg;
  if (id === rec){
    msg = message;
  }

  if (message.includes('http') && id === socket){
    chatDisplay = <View style={styles.box2}>
      <View style={{borderRadius: 15, overflow: 'hidden'}} >
        <Image source={{uri:message}} style={{maxWidth: '50%'}} />
      </View>
    {/* <Text style={styles.text}>{message}</Text> */}
    </View>;

  } else if (!message.includes('http') && id === socket){
    chatDisplay = <View style={styles.box2}>
    <Text style={styles.text}>{message}</Text>
    </View>;
  } else if (message.includes('http') && id !== socket){
    chatDisplay = <View style={styles.box}>
      <View style={{borderRadius: 15, overflow: 'hidden'}} >
        <Image source={{uri:msg}} style={{maxWidth: '50%'}} />
      </View>
    {/* <Text style={styles.text}>{msg}</Text> */}
    </View>;
  } else if (!message.includes('http') && id !== socket && id === rec){
    chatDisplay = <View style={styles.box}>
    <Text style={styles.text}>{msg}</Text>
    </View>;
  } else if(!message.includes('http') && id !== socket && id !== rec){
    chatDisplay = null
  }


  // console.log(socket, 'send to ', rec);
  // const profileIdData = useSelector((state:any) => state.profileReducer.profileIdData.socketId);
    return (
        <View style={styles.container}>
          {chatDisplay}
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 20,
  },
  box: {
    minHeight: 20,
    maxWidth: '70%',
    borderRadius: 15,
    marginLeft: 15,
    padding: 10,
    paddingLeft: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    alignSelf: 'flex-start',
    paddingRight: 15,
  },
  box2: {
    minHeight: 20,
    maxWidth: '70%',
    borderRadius: 15,
    padding: 10,
    paddingLeft: 15,
    alignSelf: 'flex-end',
    marginRight: 15,
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
});

export default ChatItem;
