/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, Dimensions, Animated} from 'react-native';

import {LabeledInput, SubmitButton} from '../../../components/index';

const {width} = Dimensions.get('window');

const LoginContainer = () => {
  const value = useState(new Animated.ValueXY({x: width, y: 0}))[0];

  useEffect(() => {
    Animated.timing(value, {
      toValue: {x: 0, y: 0},
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [value]);

  return (
    <Animated.View style={[value.getLayout(), styles.loginScreen]}>
      <Text style={styles.header}>Log in</Text>
      <LabeledInput label="Email" />
      <LabeledInput label="Password" />
      <SubmitButton label="Log in" />
    </Animated.View>
  );
};

export default LoginContainer;

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
