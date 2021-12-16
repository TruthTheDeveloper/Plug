/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View} from 'react-native';

//Components
import {Header} from '../../components/index';
import Caoursel from './components/Caoursel';

//Imported Images
const girl1 = require('../../assets/images/girl.jpg');
const girl2 = require('../../assets/images/girl1.jpg');
const girl3 = require('../../assets/images/girl2.jpg');
const girl4 = require('../../assets/images/girl3.jpg');
const girl5 = require('../../assets/images/girl4.jpg');
const girl6 = require('../../assets/images/girl5.jpg');


const HomeScreenView = () => {
  const [] = useState([
    {
      username: 'kendall_jenner',
      level: 400,
      department: 'English',
      image: girl1,
    },
    {username: 'marysmith', level: 100, department: 'Law', image: girl2},
    {username: 'clarris', level: 100, department: 'Chemistry', image: girl3},
    {
      username: 'officialSasha',
      level: 200,
      department: 'Computer Science',
      image: girl4,
    },
    {username: 'poppins', level: 100, department: 'Geography', image: girl5},
    {
      username: 'queenjanedoe',
      level: 300,
      department: 'Statistics',
      image: girl6,
    },
  ]);

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{backgroundColor: '#fff'}}>
      <Header label="Gallery" />
      {/* <FlatList
                data={posts}
                numColumns={2}
                style={{height: height - 110}}
                renderItem={({item,index}) => <ProfileItem
                        username={item.username}
                        department={item.department}
                        level={item.level}
                        image={item.image} />
                    }
            /> */}
      <Caoursel />
    </View>
  );
};

export default HomeScreenView;
