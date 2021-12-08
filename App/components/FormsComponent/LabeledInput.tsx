/* eslint-disable prettier/prettier */

import React, {FC} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

interface LabelProps {
  label: string;
  type:boolean,
  setValue:(e:string)=>void
}



const LabeledInput: FC<LabelProps> = ({label, type, setValue}): JSX.Element => {

  const inputHandler = (e:string) => {
    setValue(e);

  };


  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} secureTextEntry={type}  onChangeText={(e:string) => inputHandler(e)}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 10,
  },
  label: {
    fontWeight: '400',
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

export default LabeledInput;
