/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, Dimensions, Animated} from 'react-native';
import {LabeledInput, SubmitButton} from '../../../components/index';

import { useSelector } from 'react-redux';

const {width} = Dimensions.get('window');

const LoginView = () => {
  const value = useState(new Animated.ValueXY({x: width, y: 0}))[0];

  const [email, setEmail]:any = useState();
  const [password, setPassword]:any  = useState();
   const [borderColor, setBorderColor]:any = useState();


  useEffect(() => {
    Animated.timing(value, {
      toValue: {x: 0, y: 0},
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [value]);

  const setInputToEmpty = () => {
    setEmail('');
    setPassword('');
  };

  const authError = useSelector((state:any) => state.authReducer.error);

  return (
    <Animated.View style={[value.getLayout(), styles.loginScreen]}>
      <Text style={styles.header}>Log in</Text>
      <LabeledInput label="Email" type={false} setValue={(e) => setEmail(e)} value={email} validationError={authError === null ? '' : authError.email} borderC={(e:string) => setBorderColor(e)} border={borderColor}/>
      <LabeledInput label="Password" type={true} setValue={(e) => setPassword(e)} value={password} validationError={authError === null ? '' : authError.password} borderC={(e:string) => setBorderColor(e)} border={borderColor}/>
      <SubmitButton label="Log in" email={email} password={password} signUp={false} resetInput={setInputToEmpty} username={''}/>
    </Animated.View>
  );
};

export default LoginView;

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 23,
    paddingBottom: 10,
  },
  loginScreen: {
    paddingTop: 73 / 2,
    paddingBottom: 73 / 2,
  },
});
