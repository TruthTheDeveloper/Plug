/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, Dimensions, Animated} from 'react-native';

import {LabeledInput, SubmitButton} from '../../../components/index';

const {width} = Dimensions.get('window');

const SignupView = () => {
  const value = useState(new Animated.ValueXY({x: -width, y: 0}))[0];

  const [username, setUsername]:any = useState();
  const [email, setEmail]:any = useState();
  const [password, setPassword]:any  = useState();

  useEffect(() => {
    Animated.timing(value, {
      toValue: {x: 0, y: 0},
      duration: 500,
      useNativeDriver: false,
    }).start();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Animated.View style={value.getLayout()}>
      <Text style={styles.header}>Create an account</Text>
      <LabeledInput label="Username" type={false} setValue={(e) => setUsername(e)}/>
      <LabeledInput label="Email" type={false} setValue={(e) => setEmail(e)}/>
      <LabeledInput label="Password" type={true} setValue={(e) => setPassword(e)}/>
      <SubmitButton label="Create account" username={username} email={email} password={password} signUp={true}/>
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
