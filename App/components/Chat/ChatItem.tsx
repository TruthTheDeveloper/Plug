/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {FC} from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import { red } from '../../config/colors';
// import { useSelector } from 'react-redux';
const imge = require('../../assets/images/girl.jpg');


interface ChatProps {
  id: any;
  message: any;
  socket:any
  rec:any;
  receiverId:any
}

const ChatItem: FC<ChatProps> = ({id, message, socket, rec, receiverId}): JSX.Element => {
  // console.log(id, 'amd ', socket, message);
  let chatDisplay = null;
  let msg;
  if (id === rec){
    msg = message;
  }

  if (rec === receiverId || id === rec){
    // console.log(message);

    // console.log(id, 'sender id')
    // console.log(socket, 'socket id' )
    console.log(rec, 'user receiver id')
    console.log(receiverId, 'receiver id')


    // if the sender id  == to the loged in user socket id and their is an image
    if (message.includes('//') && id === socket){
      console.log('has')
      chatDisplay = <View style={styles.box2}>
        <View style={{borderRadius: 15, overflow: 'hidden'}} >
          <ImageBackground source={{uri:message}} />
        </View>
      {/* <Text style={styles.text}>{message}</Text> */}
      </View>;

    // if sender id === to logged in user socket id and their is no image
    } else if (!message.includes('//') && id === socket){
      console.log('sword', message)
      chatDisplay = <View style={styles.box2}>
      <Text style={styles.text}>{message}</Text>
      </View>;

      // if sender id !== user socket id  and id !== receiver id
    } else if (id !== socket && id !== rec){
        chatDisplay = null;

        // if receiver sends the messge the sender id == receive
    } else if (!message.includes('//') && id !== socket && id === rec){
      console.log('dull')
      chatDisplay = <View style={styles.box}>
      <Text style={styles.text}>{message}</Text>
      </View>;
    }
  }


  // console.log(socket, 'send to ', rec);
  // const profileIdData = useSelector((state:any) => state.profileReducer.profileIdData.socketId);
    return (
        <View style={styles.container}>
          <View style={{borderRadius: 15, overflow: 'hidden'}} >
          {/* <ImageBackground source={imge} style={{backgroundColor: 'red'}}/> */}
          </View>
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
