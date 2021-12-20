/* eslint-disable prettier/prettier */
import React, {FC} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PersonslityBoxes from '../../../components/MainComponents/PersonalityBoxes';

import * as actionTypes from '../../../redux/actions/actionTypes';

import Icons from 'react-native-vector-icons/Feather';
import Icons2 from 'react-native-vector-icons/Ionicons';
import { red } from '../../../config/colors';
import { useDispatch } from 'react-redux';

const verifiedIcon = require('../../../assets/images/verified.png');
const {height, width} = Dimensions.get('window');

interface ProfileProps {
  item: any;
  index: any;
}

const Profile: FC<ProfileProps> = ({item}): JSX.Element => {
  const dispatch = useDispatch();
  
  const showDetails = () => {
    dispatch({type: actionTypes.SHOW_DETAILS, value: item.details})
  }

  return (
    <View style={{width: width}}>
    <View style={styles.container}>
      {/* <ImageBackground style={styles.bgImage} source={{uri:`${item.profilePic}`}}> */}
      <ImageBackground style={styles.bgImage} source={item.image}>
        <View style={styles.details}>
          <View style={styles.middleContainer}>
            <View style={styles.grid1} />
            <View style={styles.grid2}>
              <View style={styles.chatCircle}>
                <Icons2 name="chatbubble-outline" size={30} color={'#fff'} />
              </View>
              <TouchableWithoutFeedback onPress={showDetails}>
                <View style={[styles.chatCircle, styles.bubble2]}>
                  <Icons name="info" size={15} color={red} />
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
          <LinearGradient
            colors={[
              'rgba(0, 0, 0, 0)',
              'rgba(0, 0, 0, 0.4)',
              'rgba(0, 0, 0, 0.5)',
              'rgba(0, 0, 0, 0.7)',
            ]}
            style={styles.details2}>
            <View style={styles.usernameContainer}>
              <Text style={styles.username}>{item.username}</Text>
              <Image source={item.availability ? verifiedIcon : null} />
            </View>
            <Text style={styles.department}>
              {item.level}l, {item.department}
            </Text>
            <View style={styles.personalityContainer}>
                {/* {item.attributeOne && item.attributeOne !== '' ? <PersonslityBoxes value={item.attributeOne} /> : null}
                {item.attributeTwo && item.attributeTwo !== '' ? <PersonslityBoxes value={item.attributeTwo} /> : null}
                {item.attributeThree && item.attributeThree !== '' ? <PersonslityBoxes value={item.attributeThree} /> : null}
                {item.attributeFour && item.attributeFour !== '' ? <PersonslityBoxes value={item.attributeFour} /> : null}
                {item.attributeFive && item.attributeFive !== '' ? <PersonslityBoxes value={item.attributeFive} /> : null}
                {item.attributeSix && item.attributeSix !== '' ? <PersonslityBoxes value={item.attributeSix} /> : null}
                {item.attributeSeven && item.attributeSeven !== '' ? <PersonslityBoxes value={item.attributeSeven} /> : null}
                {item.attributeEight && item.attributeEight !== '' ? <PersonslityBoxes value={item.attributeEight} /> : null} */}
                <PersonslityBoxes value='Music'/> 
                <PersonslityBoxes value='Politics'/>
                <PersonslityBoxes value='Potatoe'/>
                <PersonslityBoxes value='Football'/>
                <PersonslityBoxes value='Movies'/>
            </View>
          </LinearGradient>
        </View>
      </ImageBackground>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height - 140,
    marginTop: 10,
    marginLeft: 15,
    width: width - 30,
    borderRadius: 15,
    overflow: 'hidden',
  },
  bgImage: {
    height: '100%',
    width: '100%',
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
  },
  details: {
    width: '100%',
    minHeight: 100,
    position: 'absolute',
    bottom: 0
  },
  details2: {
    backgroundColor: 'transparent',
    paddingTop: 10,
    paddingBottom: 8
  },
  usernameContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
  },
  username: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '600',
    paddingRight: 5,
  },
  department: {
    color: '#fff',
    opacity: 0.7,
    paddingLeft: 15,
    fontWeight: '600',
    fontSize: 20,
    paddingBottom: 20,
  },
  personalityContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingLeft: 15,
  },
  middleContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 20
  },
  grid1: {
    height: '100%',
    width: width - 114
  },
  grid2: {
    height: '100%',
    width: 90,
  },
  chatCircle: {
    height: 60,
    width: 60,
    backgroundColor: red,
    borderRadius: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bubble2: {
    height: 35,
    width: 35,
    marginTop: 25,
    backgroundColor: '#fff'
  }
});

export default Profile;