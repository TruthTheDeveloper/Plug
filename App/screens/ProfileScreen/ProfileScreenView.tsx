import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Header, Username } from '../../components';
import PersonalityBoxes from '../../components/MainComponents/PersonalityBoxes';

//Components
import ProfilePic from './components/ProfilePic';

const {height, width} = Dimensions.get('window');

const ProfileScreenView = () => {
    return(
        <View style={styles.container}>
            <Header label='Profile' home={false} />
            <View style={styles.ProfileHeader}>
                <ProfilePic />
                <View style={{height: 10}} />
                <Username username='emilie_kiritsuga' fontSize={22} active />
            </View>
            <View style={styles.institutionContainer}>
                <Text style={styles.institution}>200lv Computer science</Text>
                <Text style={styles.institution}>Imo State University</Text>
            </View>
            <View style={styles.personalityContainer}>
                <PersonalityBoxes value='Fashion' />
                <PersonalityBoxes value='Books' />
                <PersonalityBoxes value='Potato' />
                <PersonalityBoxes value='Movies' />
                <PersonalityBoxes value='Sports' />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: height,
        width: width,
        backgroundColor: '#fff'
    },
    ProfileHeader: {
        width: width - 30,
        marginLeft: 15,
        marginTop: 20,
        alignItems: 'center'
    },
    institutionContainer: {
        width: width - 30,
        marginLeft: 15,
        marginTop: 15
    },
    institution: {
        fontSize: 20,
        fontWeight: '600'
    },
    personalityContainer: {
        width: width - 30,
        marginLeft: 15,
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});

export default ProfileScreenView