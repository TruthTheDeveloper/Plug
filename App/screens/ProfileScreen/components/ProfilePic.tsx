import React, {FC} from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

interface picProps {
    image: any
}

const ProfilePic:FC<picProps> = ({image}):JSX.Element => {
    return (
        <View style={styles.container}>
            <ImageBackground source={{uri: `${image}`}} style={styles.bgImage} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: 100,
        borderRadius: 50,
        backgroundColor: 'pink',
        overflow: 'hidden'
    },
    bgImage: {
        height: '100%',
        width: '100%',
    }
});

export default ProfilePic;