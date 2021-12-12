import React, {FC} from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const image = require('../../../assets/images/girl.jpg');
const verifiedIcon = require('../../../assets/images/verified.png');

interface profileProps {
    username: string,
    level: number,
    department: string,
    image: any
}

const ProfileItem:FC<profileProps> = ({username, level, department, image}):JSX.Element => {
    return(
        <View style={styles.container}>
            <View style={styles.main}>
                <ImageBackground source={image} style={styles.backgroundImage}>
                    <LinearGradient colors={['rgba(0, 0, 0, 0)','rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.7)']} style={styles.details}>
                        <View style={styles.usernameContainer}>
                            <Text style={styles.username}>kendallJenner</Text>
                            <Image source={verifiedIcon} />
                        </View>
                        <Text style={styles.department}>400l,Computer scie..</Text>
                    </LinearGradient>
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
        backgroundColor: 'transparent',
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