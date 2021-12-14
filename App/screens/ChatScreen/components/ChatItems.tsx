import React, {FC} from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const {width} = Dimensions.get('window');

const ChatItem = () => {
    return(
        <View style={styles.container}></View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: width - 30,
        marginLeft: 15,
        paddingTop: 10,
        paddingBottom: 10,
        borderColor: '#d4d4d4',
        borderBottomWidth: 1,
        display:'flex',
        flexDirection: 'row'
    }
})

export default ChatItem