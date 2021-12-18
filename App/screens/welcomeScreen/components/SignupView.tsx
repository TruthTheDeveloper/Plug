/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, Dimensions, Animated} from 'react-native';
import {LabeledInput, SubmitButton} from '../../../components/index';

// Redux packages

import { useSelector } from 'react-redux';


const {width} = Dimensions.get('window');

const SignupView = () => {
  const value = useState(new Animated.ValueXY({x: -width, y: 0}))[0];

  const [username, setUsername]:any = useState('');
  const [email, setEmail]:any = useState('');
  const [password, setPassword]:any  = useState('');
  const [border, setBorder]:any = useState('#000');
  const [validEmail, setValidEmail] = useState('');
  const [validPassword, setValidPassword] = useState('');
  const [validUsername, setValidUsername] = useState('');

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
  const authToken = useSelector((state:any)=> state.authReducer.token);

  useEffect(() => {

    let result = authError === null;
    if (result){
      setValidEmail('');
      setValidPassword('');
    } else if (authError.email){
      setValidEmail(authError.email);
    } else if (authError.password){
      setValidPassword(authError.password);
    } else if (authError.username){
      setValidUsername(authError.username);
    }

    let auth = authToken === false;
    if (!result && auth){
      setBorder('#Fe1135');
    }

    return () => {
      result = authError !== null;
      auth = authError === true;
    };
  },[authError, authToken]);


  return (
    <Animated.View style={value.getLayout()}>
      <Text style={styles.header}>Create an account</Text>
      <LabeledInput label="Username" type={false} setValue={(e) => setUsername(e)} value={username} validationError={validUsername} border={border}/>
      <LabeledInput label="Email" type={false} setValue={(e) => setEmail(e)} value={email} validationError={validEmail} border={border}/>
      <LabeledInput label="Password" type={true} setValue={(e) => setPassword(e)} value={password} validationError={validPassword}  border={border}/>
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
