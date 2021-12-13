/* eslint-disable prettier/prettier */
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const postProfile = async () => {



  const data = {
    userId:await AsyncStorage.getItem('userId'),
    sex:await AsyncStorage.getItem('sex'),
    department:await AsyncStorage.getItem('department'),
    level:await AsyncStorage.getItem('level'),
    institution:await AsyncStorage.getItem('institution'),
    description:await AsyncStorage.getItem('description'),
    attributeOne:await AsyncStorage.getItem('attribute_1'),
    attributeTwo:await AsyncStorage.getItem('attribute_2'),
    attributeThree:await AsyncStorage.getItem('attribute_3'),
    attributeFour:await AsyncStorage.getItem('attribute_4'),
    attributeFive:await AsyncStorage.getItem('attribute_5'),
    attributeSix:await AsyncStorage.getItem('attribute_6'),
    attributeSeven:await AsyncStorage.getItem('attribute_7'),
    attributeEight:await AsyncStorage.getItem('attribute_8'),
    availability:await AsyncStorage.getItem('availability', function (_err, value) {
      JSON.parse(value); // boolean false
  }),
    profilePic:await AsyncStorage.getItem('availability', function (_err, value) {
      JSON.parse(value); // boolean false
  }),
  };

  AsyncStorage.getItem('availability')
  .then( function (value) {
      JSON.parse(value); // boolean false
  });

  let post = {
    userId: data.userId,
    sex:data.sex,
    department:data.department,
    level:data.level,
    institution:data.institution,
    description:data.description,
    attributeOne:data.attributeOne,
    attributeTwo:data.attributeTwo,
    attributeThree:data.attributeThree,
    attributeFour:data.attributeFour,
    atttibuteFive:data.attributeFive,
    attributteSix:data.attributeSix,
    attributeSeven:data.attributeSeven,
    attributeEight:data.attributeEight,
    profilePic:data.profilePic,
  };
  return dispatch => {
    axios
      .post('https://findplug.herokuapp.com/profile', post)
      .then(response => {
        console.log(response);
      })
      .then((err) => console.log(err));
  };
};
