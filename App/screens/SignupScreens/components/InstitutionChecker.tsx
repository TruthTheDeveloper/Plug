/* eslint-disable prettier/prettier */
import React, {FC} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import {university, college, polythecnic} from '../constants';

const {width} = Dimensions.get('window');
const innerWidth = (width - 30) / 3;

interface institutionPorps {
  active: string;
  onChange: (e: string) => void;
}

const InstitutionChecker: FC<institutionPorps> = (props): JSX.Element => {
  const University = (
    <TouchableWithoutFeedback onPress={() => props.onChange(university)}>
      <View style={props.active === university ? styles.active : styles.item}>
        <Text
          style={props.active === university ? styles.activeText : styles.text}>
          University
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );

  const College = (
    <TouchableWithoutFeedback onPress={() => props.onChange(college)}>
      <View style={props.active === college ? styles.active : styles.item}>
        <Text
          style={props.active === college ? styles.activeText : styles.text}>
          College
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );

  const Polythecnic = (
    <TouchableWithoutFeedback onPress={() => props.onChange(polythecnic)}>
      <View style={props.active === polythecnic ? styles.active : styles.item}>
        <Text
          style={
            props.active === polythecnic ? styles.activeText : styles.text
          }>
          Polythecnic
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
  return (
    <View style={styles.container}>
      {University}
      {College}
      {Polythecnic}
    </View>
  );
};

export default InstitutionChecker;

const styles = StyleSheet.create({
  container: {
    height: 45,
    width: width - 30,
    marginLeft: 15,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 7,
    marginTop: 20,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
  },
  item: {
    height: '100%',
    width: innerWidth,
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  active: {
    height: '100%',
    width: innerWidth,
    backgroundColor: '#000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
    fontWeight: '600',
    fontSize: 16,
  },
  activeText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
