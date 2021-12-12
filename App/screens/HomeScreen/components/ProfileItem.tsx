import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileItem = () => {
    return(
        <View style={styles.container}></View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: '50%',
        borderWidth: 1,
        borderColor: '#000'
    }
});

export default ProfileItem;