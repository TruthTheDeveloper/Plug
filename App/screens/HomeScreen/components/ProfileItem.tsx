import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';

const image = require('../../../assets/images/girl.jpg');
const verifiedIcon = require('../../../assets/images/verified.png');

const ProfileItem = () => {
    return(
        <View style={styles.container}>
            <View style={styles.main}>
                <ImageBackground source={image} style={styles.backgroundImage}>
                    <View style={styles.details}>
                        <View style={styles.usernameContainer}>
                            <Text style={styles.username}>kendallJenner</Text>
                            <Image source={verifiedIcon} />
                        </View>
                        <Text style={styles.department}>400l,Computer scie..</Text>
                    </View>
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
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        bottom: 0,
        paddingBottom: 15,
        paddingTop: 10
    },
    usernameContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 5
    },
    username: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '600',
        paddingRight: 5
    },
    department: {
        color: '#fff',
        opacity: 0.7,
        paddingLeft: 5,
        fontWeight: '600',
        fontSize: 16
    }
});

export default ProfileItem;