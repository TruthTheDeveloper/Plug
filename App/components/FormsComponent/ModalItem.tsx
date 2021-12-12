/* eslint-disable prettier/prettier */
import React, {FC, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';

import {red} from '../../config/colors';

const {width} = Dimensions.get('window');
const newWidth = width - 60;

interface ModalProps {
  name: string;
  onSelect: (e: any) => void;
}

const ModalItem: FC<ModalProps> = ({name, onSelect}): JSX.Element => {
  const [selelcted, setSelected] = useState(false);

  const onClick = () => {
    setSelected(true);
    onSelect(name);
  };

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{name}</Text>
        </View>
        <View style={styles.CheckContainer}>
          <View style={selelcted ? styles.redCircle : styles.circle} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 40,
    width: newWidth,
    marginLeft: 10,
    paddingTop: 5,
    display: 'flex',
    flexDirection: 'row',
  },
  textContainer: {
    width: newWidth - 40,
    padding: 10,
  },
  CheckContainer: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  text: {
    fontSize: 17,
    color: '#000',
    fontWeight: '600',
  },
  circle: {
    height: 20,
    width: 20,
    borderWidth: 1,
    borderColor: '#a0a0a0',
    borderRadius: 20,
  },
  redCircle: {
    height: 20,
    width: 20,
    backgroundColor: red,
    borderRadius: 20,
  },
});

export default ModalItem;
