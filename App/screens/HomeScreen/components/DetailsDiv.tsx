/* eslint-disable prettier/prettier */
import React, {FC, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import {useDispatch} from 'react-redux';

import * as actionTypes from '../../../redux/actions/actionTypes';

const {height, width} = Dimensions.get('window');

interface DetailsProps {
  details: any;
}

const DetailsDiv: FC<DetailsProps> = ({details}): JSX.Element => {
  const value = useState(new Animated.ValueXY({x: 0, y: height}))[0];
  const dispatch = useDispatch();

  const closeDetails = () => {
    dispatch({type: actionTypes.SHOW_DETAILS, value: null});
  };

  useEffect(() => {
    Animated.timing(value, {
      toValue: {x: 0, y: 0},
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [value]);

  return (
    <TouchableWithoutFeedback onPress={closeDetails}>
      <Animated.View style={[value.getLayout(), styles.container]}>
        <View style={styles.main}>
          <Text style={styles.text}>{details}</Text>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    display: 'flex',
    flexDirection: 'column-reverse',
    paddingBottom: 60,
  },
  main: {
    padding: 20,
    width: width,
    backgroundColor: '#fff',
    borderColor: 'cyan',
    borderWidth: 1,
    // position: 'absolute',
    // bottom: 0,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  text: {
    color: '#000',
    fontSize: 15,
    opacity: 0.8,
  },
});

export default DetailsDiv;
