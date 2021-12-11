/* eslint-disable prettier/prettier */
import React, {FC} from 'react';
import {
  View,
} from 'react-native';


import EmojiHeader from './components/EmojiHeader';
import SignupScreen3 from './components/SignupScreen3';
import StatusBar from './components/StatusBar';

const SignupScreensView: FC = () => {
  return (
    <View>
      <SignupScreen3 />
    </View>
  );
};


export default SignupScreensView;
