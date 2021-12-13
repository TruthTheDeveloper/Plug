import React, { useState } from 'react';
import { View, Text, Dimensions, StyleSheet, FlatList } from 'react-native';

//components
import {Header} from '../../components/index';
import NotificationItem from './components/NotificationItem';

const {height} = Dimensions.get('window');

const girl = require('../../assets/images/girl1.jpg');
const gir2 = require('../../assets/images/girl2.jpg');

const NotificationScreenView = () => {
    const [users, setUsers] = useState([
        {username: 'Mina_Okabe', active: true, level: '400l', department: 'Computer Science', image: girl },
        {username: 'krisetin', active: true, level: '100l', department: 'law', image: gir2 },
    ])

    return(
        <View style={styles.container} >
            <Header label='Notifications' />
            <FlatList 
                data={users}
                keyExtractor={user => user.username}
                renderItem={({item}) =>
                    <NotificationItem 
                        username={item.username}
                        active={item.active}
                        level={item.level}
                        department={item.department}
                        image={item.image}
                    /> 
                } />
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