import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Emoji from 'react-native-emoji';

const EmojiHeader = () => {
    return(
        <View style={styles.header}>
            <Emoji name='slightly_smiling_face' style={{fontSize: 27}} />
            <Text style={styles.text}>Get started</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15
    },
    text: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 21,
        paddingLeft: 10
    }
})

export default EmojiHeader;