/* eslint-disable prettier/prettier */
import axios from 'axios';


export const postProfile = (userId, sex, department, level, institution, description, attributeOne, attributeTwo, attributeThree, attributeFour, attributeFive, profilePic) => {
  let post = {
    userId: userId,
    sex:sex,
    department:department,
    level:level,
    institution:institution,
    description:description,
    attributeOne:attributeOne,
    attributeTwo:attributeTwo,
    attributeThree:attributeThree,
    attributeFour:attributeFour,
    atttibuteFive:attributeFive,
    profilePic:profilePic,
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
