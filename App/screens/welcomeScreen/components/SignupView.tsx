/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, Dimensions, Animated} from 'react-native';
import {LabeledInput, SubmitButton} from '../../../components/index';

// Redux packages

import { useSelector } from 'react-redux';


const {width} = Dimensions.get('window');

const SignupView = () => {
  const value = useState(new Animated.ValueXY({x: -width, y: 0}))[0];

  const [username, setUsername]:any = useState();
  const [email, setEmail]:any = useState();
  const [password, setPassword]:any  = useState();
  const [border, setBorder]:any = useState();

  useEffect(() => {
    Animated.timing(value, {
      toValue: {x: 0, y: 0},
      duration: 500,
      useNativeDriver: false,
    }).start();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setInputToEmpty = () => {
    setUsername('');
    setEmail('');
    setPassword('');
  };

  const authError = useSelector((state:any) => state.authReducer.error);
  // console.log(authError);

  return (
    <Animated.View style={value.getLayout()}>
      <Text style={styles.header}>Create an account</Text>
      <LabeledInput label="Username" type={false} setValue={(e) => setUsername(e)} value={username} validationError={authError === null ? '' : authError.username} borderC={(e) => setBorder(e)} border={border}/>
      <LabeledInput label="Email" type={false} setValue={(e) => setEmail(e)} value={email} validationError={authError === null ? '' : authError.email} borderC={(e) => setBorder(e)} border={border}/>
      <LabeledInput label="Password" type={true} setValue={(e) => setPassword(e)} value={password} validationError={authError === null ? '' : authError.password} borderC={(e) => setBorder(e)} border={border}/>
      <SubmitButton label="Create account" username={username} email={email} password={password} signUp={true} resetInput={setInputToEmpty}/>
    </Animated.View>
  );
};

export default SignupView;

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 23,
    paddingBottom: 10,
  },
});
