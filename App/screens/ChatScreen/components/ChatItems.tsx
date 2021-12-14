import React, {FC} from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const {width} = Dimensions.get('window');

const ChatItem = () => {
    return(
        <View style={styles.container}>
            <View style={styles.UserImage}></View>
            <View style={styles.container2}></View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: 80,
        width: width - 30,
        marginLeft: 15,
        paddingTop: 10,
        paddingBottom: 10,
        borderColor: '#d4d4d4',
        borderBottomWidth: 1,
        display:'flex',
        flexDirection: 'row',
        backgroundColor: 'red'
    },
    UserImage: {
        height: 60,
        width: 60,
        borderRadius: 30,
        backgroundColor: '#f0f0f0'
    },
    container2: {
        height: 60,
        width: width - 90,
        backgroundColor: 'blue',
        paddingRight: 10
    }
})

export default ChatItem