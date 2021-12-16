import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

const ProfilePic = () => {
    return (
        <View style={styles.container}></View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: 100,
        borderRadius: 50,
        backgroundColor: 'pink'
    }
});

export default ProfilePic;