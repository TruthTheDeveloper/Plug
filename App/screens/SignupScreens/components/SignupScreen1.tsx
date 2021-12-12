/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import * as actionTypes from '../../../redux/actions/actionTypes';

import {
  LargeLabeledInput,
  AvailabilitySwitch,
  SexCheckbox,
} from '../../../components';

import EmojiHeader from './EmojiHeader';
import StatusBar from './StatusBar';
import ContinueButton from './ContinueButton';
import {useDispatch} from 'react-redux';

const {height, width} = Dimensions.get('window');

const SignupScreen1 = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [description, setdescription] = useState('');

  const next = () => {
    setLoading(true);
    dispatch({type: actionTypes.SCREEN2});
  };

  return (
    <View style={styles.container}>
      <View style={{paddingLeft: 15}}>
        <EmojiHeader page={1} />
      </View>
      <StatusBar page={1} />
      <Text style={styles.header}>Basic details</Text>
      <View style={styles.formContainer}>
        <LargeLabeledInput label="Roomate Description" setValue={(e) => setdescription(e)} value={description}/>
        <AvailabilitySwitch />
        <SexCheckbox />
        <ContinueButton label="Continue" continue={next} loading={loading} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height,
    width: '100%',
  },
  input: {
    width: '100%',
    borderColor: '#000',
    borderWidth: 1,
  },
  header: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 22,
    paddingTop: 15,
    paddingLeft: 15,
  },
  formContainer: {
    width: width - 30,
    marginLeft: 15,
    paddingTop: 15,
  },
});

export default SignupScreen1;
