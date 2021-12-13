/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import * as actionTypes from '../../../redux/actions/actionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  const [available, setAvailable] = useState(true);
  const [gender, setGender] = useState('');
  const [validation, setValidation] = useState('');

  const setAvailableState = (e:boolean) => {
    setAvailable(e);
  };

  const setGenderState = (e:string) => {
    setGender(e);
  };

  const checkDescription = () => {
    if (description === ''){
      setValidation('This filed cannot be empty');
    } else {
      AsyncStorage.setItem('description',  description);
    }
  };

  const next = () => {
    setLoading(true);
    dispatch({type: actionTypes.SCREEN2});
    checkDescription();
    // remove old items form localStorage
    AsyncStorage.removeItem('available');
    AsyncStorage.removeItem('sex');

    // set new item in localStorage
    AsyncStorage.setItem('available',  JSON.stringify(available));
    AsyncStorage.setItem('sex', gender);

  };

  return (
    <View style={styles.container}>
      <View style={{paddingLeft: 15}}>
        <EmojiHeader page={1} />
      </View>
      <StatusBar page={1} />
      <Text style={styles.header}>Basic details</Text>
      <View style={styles.formContainer}>
        <LargeLabeledInput label="Roomate Description" setValue={(e) => setdescription(e)} value={description} validationError={validation}/>
        <AvailabilitySwitch availableState={setAvailableState}/>
        <SexCheckbox genderState={setGenderState}/>
        <ContinueButton label="Continue" continue={next} loading={loading}/>
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
