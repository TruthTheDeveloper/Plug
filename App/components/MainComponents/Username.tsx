import React, {FC} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const icon = require('../../assets/images/verified.png');

interface usernameProps {
    username: string,
    active: boolean
}

const Username:FC<usernameProps> = ({username, active}):JSX.Element => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{username}</Text>
            {active && <Image source={icon} />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        color: '#000',
        fontWeight: '600',
        paddingRight: 6
    }
});

export default Username;