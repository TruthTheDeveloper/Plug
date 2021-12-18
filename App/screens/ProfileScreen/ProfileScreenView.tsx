import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { Header, Username } from '../../components';
import PersonalityBoxes from '../../components/MainComponents/PersonalityBoxes';
import { red } from '../../config/colors';

//Components
import ProfilePic from './components/ProfilePic';
import Button from './components/Buttons';
import EditScreen from './components/EditScreen';

//Image
const image = require('../../assets/images/girl.jpg');

const {height, width} = Dimensions.get('window');

const ProfileScreenView = () => {
    const [Edit, setEdit] = useState(false);

    return(
        <View style={styles.container}>
            <Header label='Profile' home={false} />
            <ScrollView>
                <View style={styles.ProfileHeader}>
                    <ProfilePic image={image} />
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
                <View style={styles.description}>
                    <Text style={styles.descriptionText}>Looking for a roomate who's smart and loves God.Also one who's not a racist, or a cultist or fraudster, or a criminal</Text>
                </View>
                <TouchableWithoutFeedback onPress={() => setEdit(true)}>
                    <View style={styles.EditButton}>
                        <Text style={styles.EditButtonText}>Edit Profile</Text>
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.ExtraButtonsContainer}>
                    <Button iconLabel='bell-off' label='Avaliability' />
                    <Button iconLabel='log-out' label='Logout' />
                </View>
            </ScrollView>
            {Edit  && <EditScreen image={image} cancle={() => setEdit(false)} /> }
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        // height: height,
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
        fontWeight: '600',
        color: '#000',
        opacity: 0.9
    },
    personalityContainer: {
        width: width - 30,
        marginLeft: 15,
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    description: {
        width: width - 30,
        marginLeft: 15,
        marginTop: 10
    },
    descriptionText: {
        color: '#000',
        fontSize: 18,
        opacity: 0.7
    },
    EditButton: {
        height: 40,
        width: 120,
        borderColor: red,
        borderWidth: 1,
        borderRadius: 7,
        backgroundColor: '#fff',
        marginRight: 'auto',
        marginLeft: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    EditButtonText: {
        color: red,
        fontSize: 18,
        fontWeight: '600'
    },
    ExtraButtonsContainer: {
        width: width - 30,
        marginLeft: 15,
        marginBottom: 50,
        marginTop: 30
    }
});

export default ProfileScreenView