/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { Loader } from '../../components';
import { useSelector } from 'react-redux';

import * as colors from '../../config/colors';
import Form from './components/Form';

const {height} = Dimensions.get('window');
const bgImage = require('../../assets/images/background.png');


const AuthScreenView = () => {
  const isLoading = useSelector((state:any) => state.authReducer.authLoading);
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <>{isLoading ? <Loader/> : <ImageBackground source={bgImage} style={{height: height, width: '100%'}}>
    <View style={styles.header}>
      <Text style={styles.logo}>Plug</Text>
    </View><View style={styles.description}>
        <Text style={styles.descriptionText}>
          Find roomates easily with roomate sure Plug
        </Text>
      </View><Form />
  </ImageBackground>}</>
    
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingLeft: 15,
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 25,
    color: colors.red,
  },
  description: {
    width: 200,
    paddingLeft: 15,
    paddingTop: 20,
  },
  descriptionText: {
    fontWeight: '600',
    color: '#000',
    opacity: 0.7,
    fontSize: 17,
  },
});

export default AuthScreenView;
