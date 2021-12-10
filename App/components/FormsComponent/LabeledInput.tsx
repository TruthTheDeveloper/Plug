/* eslint-disable prettier/prettier */
import React, {FC} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

interface LabelProps {
  label: string;
  type:boolean,
  setValue:(e:string)=>void,
  value:string,
  validationError:string
  border:string
}



const LabeledInput: FC<LabelProps> = ({label, type, setValue, value, validationError, border}): JSX.Element => {
  // const [border, setBorder] = useState('');

  // if (validationError !== ''){
  //   borderC('#Fe1135');
  // } else {
  //   borderC('#000');
  // }

  const inputHandler = (e:string) => {
    setValue(e);

  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {/* <Text style={validationStyle.validationColor}>{validationError}</Text> */}
      {validationError !== '' ? <Text style={validationStyle.validationColor}>{validationError}</Text> : null}
      {/* {validationError !== '' ? borderC = '#FE1135' : borderC=''} */}
      <TextInput value={value} style={[styles.input, {borderColor:border}]} secureTextEntry={type}  onChangeText={(e:string) => inputHandler(e)}/>
    </View>
  );
};

const validationStyle = StyleSheet.create({
  validationColor:{
    color:'#FE1135',
  },
});

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
    // borderColor: '#000',
    borderRadius: 5,
    paddingLeft: 10,
    opacity: 0.8,
    color: '#000',
    fontWeight: 'normal',
    fontSize: 17,
  },
});

export default LabeledInput;
