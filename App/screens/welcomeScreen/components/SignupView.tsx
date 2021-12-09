/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, Dimensions, Animated} from 'react-native';

import {LabeledInput, SubmitButton, PasswordInput} from '../../../components/index';

const {width} = Dimensions.get('window');

const SignupView = () => {
  const value = useState(new Animated.ValueXY({x: -width, y: 0}))[0];

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
      <LabeledInput label="Username" />
      <LabeledInput label="Email" />
      <PasswordInput label="Password"/>
      {/* <passwordInput label="Password" /> */}
      <SubmitButton label="Create account" />
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
