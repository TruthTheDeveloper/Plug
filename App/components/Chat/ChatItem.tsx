/* eslint-disable prettier/prettier */
import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import { useSelector } from 'react-redux';


interface ChatProps {
  id: any;
  message: string;
  socket:any
  rec:any;
}

const ChatItem: FC<ChatProps> = ({id, message, socket, rec}): JSX.Element => {
  console.log(socket, 'send to ', rec);
  // const profileIdData = useSelector((state:any) => state.profileReducer.profileIdData.socketId);
    return (
        <View style={styles.container}>
        {id === socket ? (
            <View style={styles.box2}>
            <Text style={styles.text}>{message}</Text>
            </View>
        ) : (
            <View style={styles.box}>
            <Text style={styles.text}>{message}</Text>
            </View>
        )}
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
