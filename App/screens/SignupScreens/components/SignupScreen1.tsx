/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
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
  const [available, setAvailable] = useState(true);
  const [gender, setGender] = useState('');
  const [validation, setValidation] = useState('');
  const [border, setBorder]:any = useState('#000');

  useEffect(() => {
    if (validation !== ''){
      setBorder('#Fe1135');
    } else if (validation === '') {
      setBorder('#000');
    }
  },[validation]);



  const setAvailableState = (e:boolean) => {
    setAvailable(e);
  };

  const setGenderState = (e:string) => {
    setGender(e);
  };

  const checkDescription = () => {
    if (description === ''){
      setValidation('This field cannot be empty');
    }
  };

  const next = () => {

    if (validation === '' && description.length > 0){
      dispatch({type:actionTypes.SET_FIRST_SCREEN_DETAIL, data:{
        description:description,
        available:available,
        gender:gender,
      }});
      dispatch({type: actionTypes.SCREEN2});
      setLoading(true);
    }

    checkDescription();

  };

  const inputHandler = (e:string) => {
    setdescription(e);
    if (description.length >= 250){
      setValidation('cannot exceed more than 60 words');
      // setdescription('')
    } else if (description.length <= 250){
      setValidation('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={{paddingLeft: 15}}>
        <EmojiHeader page={1} />
      </View>
      <StatusBar page={1} />
      <Text style={styles.header}>Basic details</Text>
      <View style={styles.formContainer}>
        <LargeLabeledInput label="Roomate Description" setValue={inputHandler} value={description} validationError={validation} border={border}/>
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
