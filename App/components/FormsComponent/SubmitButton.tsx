/* eslint-disable prettier/prettier */

import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface ButtonProps {
  label: string;
}

const SubmitButton: FC<ButtonProps> = (props): JSX.Element => {
  return (
    <View style={styles.Container}>
      <Text style={styles.text}>{props.label}</Text>
    </View>
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
