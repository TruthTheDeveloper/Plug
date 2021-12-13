/* eslint-disable prettier/prettier */
import React, {FC} from 'react';
import {View} from 'react-native';
import AuthScreenContainer from './welcomeScreen/index';
import SignUpScreensContainer from './SignupScreens/index';


interface MainProps {
    authenticate: Boolean;
}

const MainScreen: FC<MainProps> = ({authenticate}) => {
    console.log(authenticate)
  return (
    <View>
        {authenticate ? <SignUpScreensContainer/> : <AuthScreenContainer/>}
    </View>
  );
};

export default MainScreen;
