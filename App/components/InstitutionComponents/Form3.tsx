/* eslint-disable prettier/prettier */
import React, {useEffect, useState, FC} from 'react';
import {Animated, Dimensions} from 'react-native';

import {DropDownSelector, LabeledInput} from '../index';

const {width} = Dimensions.get('window');

interface ModalProps {
  onSelect: () => void;
  onChangeDept: (e: string) => void;
  onChangeLev: (e: string) => void;
  name: any;
  department: any;
  level: any;
}

const Form3: FC<ModalProps> = ({
  onSelect,
  name,
  department,
  level,
  onChangeDept,
  onChangeLev,
}): JSX.Element => {
  const value = useState(new Animated.ValueXY({x: width / 5, y: 0}))[0];

  let newName = name;
  if (name) {
    if (name.length > 30) {
      newName = name.substring(0, 28) + '...';
    }
  }

  useEffect(() => {
    Animated.timing(value, {
      toValue: {x: 0, y: 0},
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [value]);

  return (
    <Animated.View style={value.getLayout()}>
      <DropDownSelector
        label="Select Polythecnic"
        label2={name ? newName : 'Federal Polythecnic Nekede'}
        onClick={onSelect}
      />
      <LabeledInput
        label="Department"
        type={false}
        validationError=""
        value={department}
        border="#000"
        setValue={(e: string) => onChangeDept(e)}
      />
      <LabeledInput
        label="Level"
        type={false}
        validationError=""
        value={level}
        border="#000"
        setValue={(e: string) => onChangeLev(e)}
      />
    </Animated.View>
  );
};

export default Form3;
