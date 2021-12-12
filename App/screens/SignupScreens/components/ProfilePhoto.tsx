import React, { FC, useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, ImageBackground } from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

import Icons from 'react-native-vector-icons/Feather';

const bgImage = require('../../../assets/images/background.png');

interface ImageProps {
    setImage: (e: any) => void
}

const ProfilePhoto:FC<ImageProps> = ({setImage}):JSX.Element => {
    const [photo, postPhoto] = useState();

    const selectPhoto = () => {
        launchImageLibrary({mediaType: 'photo'}, (response) => {
            if(response.assets){
                const data = response.assets[0].uri;
                postPhoto(data);
                setImage(data)
            }
        })
    };

    const imageLink = {}

    const emptyImg = (
        <View style={styles.container}>
            <Icons name='camera' color='#000' size={22} style={styles.icon} />
        </View>
    );

    const image = (
        <View style={styles.container}>
            <ImageBackground source={{uri: `${photo}`}} style={styles.container} />
        </View>
    )

    return(
        <TouchableWithoutFeedback onPress={selectPhoto}>
            {photo ? image : emptyImg}
        </TouchableWithoutFeedback>
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
        justifyContent: 'center',
        overflow: 'hidden'
    },
    icon: {
        opacity: 0.5
    }
})

export default ProfilePhoto;