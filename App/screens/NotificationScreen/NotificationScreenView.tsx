import React, { useState } from 'react';
import { View, Text, Dimensions, StyleSheet, FlatList } from 'react-native';

//components
import {Header} from '../../components/index';
import NotificationItem from './components/NotificationItem';

const {height} = Dimensions.get('window');

const girl = require('../../assets/images/girl1.jpg');

const NotificationScreenView = () => {
    const [users, setUsers] = useState([
        {username: 'Mina_Okabe', active: true, level: '400l', department: 'Computer Science', image: girl }
    ])

    return(
        <View style={styles.container} >
            <Header label='Notifications' />
            <NotificationItem 
                username={users[0].username}
                active={users[0].active}
                level={users[0].level}
                department={users[0].department}
                image={users[0].image}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: height,
        backgroundColor: '#fff'
    }
})

export default NotificationScreenView;