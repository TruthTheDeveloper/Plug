/* eslint-disable prettier/prettier */
import React, {FC} from 'react';
import {
  View,
} from 'react-native';

import SignupScreen1 from './components/SignupScreen1';
import SignupScreen2 from './components/SignupScreen2'
import SignupScreen3 from './components/SignupScreen3';

const SignupScreensView: FC = () => {
  return (
    <View>
      <SignupScreen3 />
    </View>
  );
};


export default SignupScreensView;
