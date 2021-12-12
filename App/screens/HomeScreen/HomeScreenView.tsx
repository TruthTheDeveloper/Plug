import React, {FC, useState} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

//Components
import {Header} from '../../components/index'
import ProfileItem from './components/ProfileItem';

const HomeScreenView = () => {
    const [posts, setPosts] = useState([
        {username: 'kendall_jenner', level: 400, department: 'Computer Science'},
        {username: 'marysmith', level: 100, department: 'Law'},
        {username: 'clarris', level: 100, department: 'Chemistry'},
        {username: 'officialSasha', level: 200, department: 'English'},
    ]);

    return(
        <View>
            <Header />
            <FlatList
                data={posts}
                numColumns={2}
                renderItem={({item,index}) => <ProfileItem /> }
            />
        </View>
    )
};

export default HomeScreenView;