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
  const [border, setBorder]:any = useState('#000');
  const [validEmail, setValidEmail] = useState('');
  const [validPassword, setValidPassword] = useState('');



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
  const authToken = useSelector((state:any)=> state.authReducer.token);
  console.log(authError, 'error');

  useEffect(() => {

    let result = authError === null;
    if (result){
      setValidEmail('');
      setValidPassword('');
    } else if (authError.email){
      setValidEmail(authError.email);
    } else if (authError.password){
      setValidPassword(authError.password);
    }

    // let auth = authToken === false;
    if (!result){
      setBorder('#Fe1135');
    }

    return () => {
      result = authError !== null;
      // auth = authError === true;
    };
  },[authError, authToken]);

  return (
    <Animated.View style={[value.getLayout(), styles.loginScreen]}>
      <Text style={styles.header}>Log in</Text>
      <LabeledInput label="Email" type={false} setValue={(e) => setEmail(e)} value={email} validationError={validEmail}  border={border}/>
      <LabeledInput label="Password" type={true} setValue={(e) => setPassword(e)} value={password} validationError={validPassword}  border={border}/>
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
