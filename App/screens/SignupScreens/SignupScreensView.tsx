/* eslint-disable prettier/prettier */
import React, {FC} from 'react';
import {
  View,
} from 'react-native';
import EmojiHeader from './components/EmojiHeader';
import SignupScreen2 from './components/SignupScreen2';
import StatusBar from './components/StatusBar';

const SignupScreensView: FC = () => {
  return (
    <View>
      <SignupScreen2 />
    </View>
  );
};


export default SignupScreensView;
