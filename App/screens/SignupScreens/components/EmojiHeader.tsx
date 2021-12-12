/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Emoji from 'react-native-emoji';

interface statusBarProps{
  page: number
}

const EmojiHeader:FC<statusBarProps>  = ({page}):JSX.Element => {

  let text = 'Get started';
  if(page === 2){
    text = 'Almost there'
  }else if(page === 3){
    text = 'Finish up'
  }

  return (
    <View style={styles.header}>
      <Emoji name="slightly_smiling_face" style={{fontSize: 27}} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
  },
  text: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 20,
    paddingLeft: 10,
  },
});

export default EmojiHeader;
