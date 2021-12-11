import React from 'react';
import { View, StyleSheet } from 'react-native';

import Icons from 'react-native-vector-icons/Feather';

const ProfilePhoto = () => {
    return(
        <View style={styles.container}>
            <Icons name='camera' color='#000' size={22} style={styles.icon} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: 150,
        width: 150,
        borderRadius: 75,
        backgroundColor: '#e9e9e9',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        opacity: 0.5
    }
})

export default ProfilePhoto;