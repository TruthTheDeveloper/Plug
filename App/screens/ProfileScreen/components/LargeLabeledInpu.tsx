/* eslint-disable prettier/prettier */
import React, {FC} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

interface LabelProps {
  label: string;
  setValue:(e:string)=>void,
  value:string,
}

const LargeLabeledInput: FC<LabelProps> = ({setValue, label, value}): JSX.Element => {

  const inputHandler = (e:string) => {
    setValue(e);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        numberOfLines={4}
        textAlignVertical="top"
        multiline
        placeholder="I need aroomate that is ..."
        onChangeText={(e:string) => inputHandler(e)}
        value={value}
        // maxLength={60}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 10,
  },
  label: {
    fontWeight: '600',
    fontSize: 18,
    color: '#000',
    opacity: 0.7,
    paddingBottom: 5,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    paddingLeft: 10,
    opacity: 0.8,
    color: '#000',
    fontWeight: 'bold',
    fontSize: 17,
  },
});

export default LargeLabeledInput;
