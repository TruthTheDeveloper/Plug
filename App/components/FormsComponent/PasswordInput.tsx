/* eslint-disable prettier/prettier */

import React, {FC, useState, useEffect} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

interface LabelProps {
  label: string;
}



const PasswordInput: FC<LabelProps> = (props): JSX.Element => {

  const [password, setpassword]:any = useState('');

  useEffect(() => {
    console.log(password);
  },[password]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput style={styles.input} secureTextEntry={true} onChangeText={(value:string) => setpassword(value)}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 10,
  },
  label: {
    fontWeight: '300',
    fontSize: 18,
    color: '#000',
    opacity: 0.7,
    paddingBottom: 5,
  },
  input: {
    height: 37,
    width: '100%',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    paddingLeft: 10,
    opacity: 0.8,
    color: '#000',
    fontWeight: 'normal',
    fontSize: 17,
  },
});

export default PasswordInput;
