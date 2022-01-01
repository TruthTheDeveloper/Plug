/* eslint-disable prettier/prettier */
import * as actions from '../../redux/actions/index';
import * as actionTypes from '../../redux/actions/actionTypes'
import { useDispatch } from 'react-redux';
import React, {FC} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface ButtonProps {
  label: string;
  username:string;
  email:string;
  password:string;
  signUp:boolean;
  resetInput:() => void;
}

const SubmitButton: FC<ButtonProps> = ({label, username, email, password, signUp, resetInput}): JSX.Element => {
  const dispatch = useDispatch();

  const submitHandler = () => {
    dispatch(actions.auth(username, email, password, signUp));
    dispatch({type:actionTypes.RESET_AUTH_LOADING, authLoading:true});
    setTimeout(() => {
      resetInput();
    },1500);
  };


  return (
    <TouchableOpacity onPress={submitHandler}>
      <View style={styles.Container}>
        <Text style={styles.text}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Container: {
    height: 45,
    width: '100%',
    borderRadius: 8,
    backgroundColor: '#000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  text: {
    fontWeight: '600',
    color: '#fff',
    fontSize: 18,
  },
});

export default SubmitButton;
