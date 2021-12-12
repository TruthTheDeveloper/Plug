import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const image = require('../../../assets/images/girl.jpg')

const ProfileItem = () => {
    return(
        <View style={styles.container}>
            <View style={styles.main}>
                <ImageBackground source={image} style={styles.backgroundImage}>
                    <View style={styles.details}></View>
                </ImageBackground>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 270,
        width: '50%',
    },
    main: {
        height: 250,
        width: '90%',
        backgroundColor: 'red',
        marginTop: 10,
        marginLeft: '5%',
        borderRadius: 15,
        overflow: 'hidden'
    },
    backgroundImage: {
        height: '100%',
        width: '100%',
    },
    details: {
        height: 70,
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        bottom: 0
    }
});

export default ProfileItem;