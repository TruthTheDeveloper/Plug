import React, {FC, useState} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

//Components
import {Header} from '../../components/index'
import ProfileItem from './components/ProfileItem';

const HomeScreenView = () => {
    const [posts, setPosts] = useState([1,2,3,4,5,6]);

    return(
        <View>
            <Header />
            {/* <FlatList
                data={posts}
                numColumns={2}
                renderItem={({item,index}) => <ProfileItem /> }
            /> */}
            <ProfileItem />
        </View>
    )
};

export default HomeScreenView;