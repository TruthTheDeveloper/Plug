/* eslint-disable prettier/prettier */
import React, {FC} from 'react';
import {
  View,
} from 'react-native';
import { useSelector } from 'react-redux';

import SignupScreen1 from './components/SignupScreen1';
import SignupScreen2 from './components/SignupScreen2'
import SignupScreen3 from './components/SignupScreen3';

const SignupScreensView: FC = () => {
  const screen = useSelector((state: any) => state.navReducer.screen);

  let Screen = <SignupScreen1 />
  if(screen === 2){
    Screen = <SignupScreen2 />
  }else if(screen === 3){
    Screen = <SignupScreen3 />
  }

  return (
    <View>
      {Screen}
    </View>
  );
};


export default SignupScreensView;
