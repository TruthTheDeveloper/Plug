/* eslint-disable prettier/prettier */
import React, {FC} from 'react';
import {View} from 'react-native';
import AuthScreenContainer from './welcomeScreen/index';
import SignUpScreensContainer from './SignupScreens/index';
import {useSelector} from 'react-redux'


interface MainProps {
    authenticate: Boolean;
}

const MainScreen: FC<MainProps> = ({authenticate}) => {
    console.log(authenticate);
    const authToken = useSelector((state:any)=> state.authReducer.token);
  return (
    <View>
        {authenticate === true || authToken !== null? <SignUpScreensContainer/> : <AuthScreenContainer/>}
    </View>
  );
};

export default MainScreen;
