import React, {FC} from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PersonslityBoxes from '../../../components/MainComponents/PersonalityBoxes';

const verifiedIcon = require('../../../assets/images/verified.png');
const {height, width} = Dimensions.get('window');

interface ProfileProps {
    item: any,
    index: any
}

const Profile:FC<ProfileProps> = ({item, index}):JSX.Element => {
    return(
        <View style={styles.container}>
            <ImageBackground style={styles.bgImage} source={item.image} >
                <LinearGradient colors={['rgba(0, 0, 0, 0)','rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.7)']} style={styles.details}>
                    <View style={styles.usernameContainer}>
                        <Text style={styles.username}>{item.username}</Text>
                        <Image source={verifiedIcon} />
                    </View>
                    <Text style={styles.department}>{item.level}l, {item.department}</Text>
                    <View style={styles.personalityContainer}>
                        <PersonslityBoxes value='Funny' />
                        <PersonslityBoxes value='Cute' />
                        <PersonslityBoxes value='Shy' />
                        <PersonslityBoxes value='Outgoing' />
                        <PersonslityBoxes value='Music lover' />
                    </View>
                </LinearGradient>
            </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: height - 140,
        marginTop: 10,
        marginLeft: 15,
        width: width - 30,
        borderRadius: 15,
        overflow: 'hidden',
    },
    bgImage: {
        height: '100%',
        width: '100%',
        backgroundColor: '#f0f0f0',
        borderRadius: 20
    },
    details: {
        width: '100%',
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: 0,
        paddingBottom: 8,
        paddingTop: 10
    },
    usernameContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15
    },
    username: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '600',
        paddingRight: 5
    },
    department: {
        color: '#fff',
        opacity: 0.7,
        paddingLeft: 15,
        fontWeight: '600',
        fontSize: 20,
        paddingBottom: 20
    },
    personalityContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        paddingLeft: 15
    }
})

export default Profile;