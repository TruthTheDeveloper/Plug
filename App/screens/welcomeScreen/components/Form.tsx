/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Dimensions, Animated} from 'react-native';

import Link from './Link';
import LoginContainer from './LoginContainer';
import SignupContainer from './SignupContainer';

const {width} = Dimensions.get('window');

const Form = () => {
  const value = useState(new Animated.ValueXY({x: width, y: 0}))[0];
  const [isSignup, setIsSignup] = useState(true);

  useEffect(() => {
    Animated.timing(value, {
      toValue: {x: 0, y: 0},
      duration: 1000,
      useNativeDriver: false,
    }).start();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggle = () => {
    setIsSignup(prev => !prev);
    Animated.timing(value, {
      toValue: {x: 0, y: 0},
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      {isSignup ? <SignupContainer /> : <LoginContainer />}
      <Link toggle={toggle} label="don't have an account?" label2="Signup" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: width - 30,
    marginLeft: 15,
    paddingTop: 20,
  },
  header: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 23,
    paddingBottom: 10,
  },
});

export default Form;
