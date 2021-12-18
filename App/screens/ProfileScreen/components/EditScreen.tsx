import React, {FC} from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

//Components
import { Header } from '../../../components';
import ProfilePic from './ProfilePic';

import LargeLabeledInput from './LargeLabeledInpu';

const {height, width} = Dimensions.get('window');

interface EditScreenProps{
    image: string,
    // university: string,
    // depatrment: string,
    // level: any
}

const EditScreen:FC<EditScreenProps> = ({image}):JSX.Element => {
    return (
        <View style={styles.container}>
            <Header label='Edit' home={false} />
            <View style={styles.ImageContainer}>
                <ProfilePic image={image} />
            </View>
            <View style={styles.FormContainer}>
                <LargeLabeledInput label='Description' />


                
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: height,
        width: width,
        position: 'absolute',
        top: 0,
        backgroundColor: '#fff'
    },
    ImageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        paddingTop: 20
    },
    FormContainer: {
        height: 300,
        width: width - 30,
        marginLeft: 15,
        borderWidth: 1,
        borderColor: '#000'
    }
});

export default EditScreen;